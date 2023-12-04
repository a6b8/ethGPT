import fs from 'fs'
import cheerio from 'cheerio'

const html = fs.readFileSync(
    './data/0-start/overview.html', 
    'utf-8'
)
const $ = cheerio.load( html )
const tables = $( 'table' )


const k = []
const all = new Array( tables.length )
    .fill( '' )
    .reduce( ( acc, a, index ) => {
        const table = tables.eq( index )

        const nearestHeading = table.prevAll( 'h1, h2, h3, h4, h5, h6').first()

        const item = {}
        table
            .find( 'tr' )
            .each( ( rowIndex, row ) => {
                const item = {};
                $( row )
                    .find( 'td' )
                    .each( ( colIndex, cell ) => {
                        const header = table.find( 'th' ).eq( colIndex ).text().trim()
                        let value = $( cell ).text().trim()

                        if( header === 'API Reference' ) {
                            const href = $( cell )
                                .find( 'a' )
                                .map( ( index, element ) => {
                                    return $( element ).attr( 'href' )
                                } )
                                .get()[ 0 ]
                            value = `https://docs.moralis.io${href}`
                        }

                        item[ header ] = value
                    } )

                if( Object.keys( item ).length !== 0 ) {
                    item['category'] = `${nearestHeading.text().replace(/[^\x20-\x7E]/g, "")}`
                    acc.push( item )
                }
            } )

        return acc
    }, [] )
    .map( ( a, index ) => {
        delete a['No.']
       // delete a['API Reference']

        const item = Object
            .entries( a )
            .reduce( ( acc, a, index, all ) => {
                let [ key, value ] = a
                key = key.replace( ' ', '_' ).toLowerCase()

                k.push( key )
                acc[ key ] = value

                if( all.length -1 === index ) {
                    if( Object.hasOwn( acc, 'spam_detection' ) ) {
                        if( acc[ 'spam_detection'] === '✅' ) {
                            acc['spam_detection'] = true
                        } else {
                            acc['spam_detection'] = false
                        }
                    } else {
                        acc['spam_detection'] = false
                    }
                }

                return acc
            }, { 'id': index } )

        return item
    } )

const data = {
    'data': all
}

console.log( `In total: ${all.length} routes found.` )
console.log( `Unique Keys in Array: ${k.filter( ( v, i, a ) => a.indexOf( v ) === i ).join(', ' )}.`)


fs.writeFileSync( 
    './data/0-routes-raw.json', 
    JSON.stringify( data, null, 4  ), 
    'utf-8'
)
