import fs from 'fs'
import axios from 'axios'
import path from 'path'

async function download( { url, folder, name } ) {
    try {
      const response = await axios.get( url )
      if (!fs.existsSync( folder ) ) {
        fs.mkdirSync( folder, { 'recursive': true } )
      }

      const filePath = path.join(folder, `${name}.html` )
      fs.writeFileSync( filePath, response['data'] )
    } catch( error ) {
      console.error( 'Error downloading the website:', error )
    }
}


const p = './data/0-routes-raw.json'
const raw = fs.readFileSync( p, 'utf-8')
const json = JSON.parse( raw )


for( const item of json['data'] ) {
    process.stdout.write( `${item['id']} ` )
    await download( { 
        'url': item['api_reference'], 
        'folder': './data/1-details/', 
        'name': item['id'] 
    } )
}