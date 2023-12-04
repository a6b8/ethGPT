import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'


function parseHTML( { index, folderPath } ) {
    const fileName = `${index}.html`
    const html = fs.readFileSync( `${folderPath}/${fileName}`, 'utf-8' )
    const $ = cheerio.load( html )

    const inputs = [
        [ 'div:contains("PATH PARAMS")', 'path' ],
        [ 'div:contains("QUERY PARAMS")', 'query' ],
        [ 'div:contains("BODY PARAMS")', 'body' ]
    ]
        .reduce( ( abb, b, rindex ) => {
            const [ params, area ] = b

            const targetDiv = $( params )
            const nextDiv = targetDiv.next( 'div[class^="group_"]' )
            const deepChild = nextDiv.find( 'div[class^="groupContainer_"]' )
            const fieldElements = deepChild.find( 'div[class^="group_"]' )
            
            const fields = fieldElements.find( 'div[class^="field_"]' )

            fields
                .map( ( index, element ) => {
                    const item = [
                        [ 'span[class^="paramName_"]', 'key' ],
                        [ 'span[class^="paramType_"]', 'type' ],
                        [ 'span[class^="paramRequired_"]', 'required' ],
                        [ 'div[class^="paramDescription_"]', 'description' ],
                        [ 'select[class^="input_"]', 'input' ]  
                    ]
                        .reduce( ( acc, a, index, all ) => {
                            const [ path, key ] = a
                            if( index ===  0 ) {
                                acc['query_type'] = area
                            }

                            acc[ key ] = ( key === 'required' ) ? false : null
                            $( element )
                                .find( path )
                                .each( ( i, el ) => {
                                    switch( key ) {
                                        case 'input':
                                            acc[ key ] = $( el )
                                                .find( 'option' )
                                                .map( ( index, element ) => {
                                                    return $( element ).attr( 'value' )
                                                } )
                                                .get()
                                                .filter( a  => a !== '')
                                            break
                                        case 'required':
                                            acc[ key ] = $( el ).text()
                                            acc[ key ] = acc[ key ] === 'required' ? true : false
                                            break
                                        default:
                                            acc[ key ] = $( el ).text()
                                            break
                                    }
                                } )
            
                            return acc
                        }, {} )
                    abb.push( item )
                } )
            return abb
        }, [] )

    const result = {
        'requestType': $( 'span[class^="method_"]' ).text(),
        inputs
    }
    

    return result
}



const json = JSON.parse( 
    fs.readFileSync( './data/0-routes-raw.json', 'utf-8' ) 
)

const folderPath = './data/1-details'
const d = json['data']
    .reduce( ( aaa, item, pindex ) => {
        process.stdout.write( `${pindex} `)
        const params = parseHTML( { 'index': item['id'], folderPath } )
        const all = { ...item, ...params }
        aaa.push( all )
        return aaa
    }, [] )

const data = { 'data': d }

fs.writeFileSync( 
    './data/1-details.json', 
    JSON.stringify( data, null, 4 ), 
    'utf-8' 
)