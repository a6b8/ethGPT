import { EthGPT } from './src/EthGPT.mjs'


const ethGPT = new EthGPT()
const str = ethGPT
    .openAiSchema( { 
        'title': 'test', 
        'description': 'abc', 
        'version': '0.32.2', 
        'url': 'https://deep-index.moralis.io/api/v2.2'
    } )

