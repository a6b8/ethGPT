import { EthGPT } from './src/EthGPT.mjs'
import fs from 'fs'


const ethGPT = new EthGPT()
const str = ethGPT
    .openAiSchema( { 
        'title': 'test', 
        'description': 'abc', 
        'version': '0.32.2', 
        'url': 'https://deep-index.moralis.io/api/v2.2'
    } )


fs.writeFileSync( 
    'openAi.json',
    JSON.stringify( str, null, 4 ), 
    'utf-8'
)