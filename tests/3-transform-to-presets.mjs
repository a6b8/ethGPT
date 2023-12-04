import fs from 'fs'


function toCamelCase( { str } ) {
    const result = str
        .toLowerCase()
        .replace( 
            /[^a-zA-Z0-9]+(.)/g, 
            (_, chr) => chr.toUpperCase()
        )
    return result
}


const json = JSON.parse( 
    fs.readFileSync( './data/1-details.json', 'utf-8' )
)

/*
        'getBlockHashFromBlockHeight': {
            'description': 'Retrieve the block at given block height and network.',
            'input': {
                'query': {
                    'struct': '/r/blockhash/{blockHeight}'
                },
                'variables': {
                    'blockHeight': {
                        'default': {
                            'main': '1',
                            'signet': '1'
                        },
                        'description': 'Set Block Height.',
                        'validation': 'validations__blockHeight',
                        'required': true
                    }
                }
            },
            'output': {}
        }
*/


const result = {
    'presets': {},
    'validation': {}
}

result['presets'] = json['data']
    .reduce( ( acc, item, index ) => {
        const key = item['method']

        if( item['inputs'].length === 0 ) {
            return acc
        }

        if( !Object.hasOwn( acc, key ) ) {
            acc[ key ] = {}
        }

        if( Object.hasOwn( acc[ key ], item['requestType'] ) ) {
            // console.log( 'key', key )
        }

        acc[ key ][ item['requestType'] ] = item['inputs']
            .reduce( ( abb, a, rindex ) => {
                if( rindex === 0 ) {
                    abb['description'] = item['description']
                    abb['reference'] = item['api_reference']
                    abb['url'] = item['url']
                    abb['spamDetection'] = item['spam_detection']
                    abb['input'] = {
                        'query': {
                            'url': a['url']
                        },
                        'variables': {}
                    }
                }

                const validationKey = `${a['key']}`
                abb['input']['variables'][ a['key'] ] = {
                    'default': {},
                    'description': a['description'],
                    'type': a['type'],
                    'queryType': a['query_type'],
                    'validation': {
                        'regex': '',
                        'description': '',
                        'enum': a['input']
                    },
                    'required': a['required']
                }

                if( abb['input']['variables'][ a['key'] ]['validation']['enum'] !== null ) {
                    abb['input']['variables'][ a['key'] ]['validation']['description'] = 'Only use one of the following options'
                } else {
                    abb['input']['variables'][ a['key'] ]['validation']['regex'] = `validation__${validationKey}`
                    result['validation'][ validationKey ] = {
                        'regex': '',
                        'description': ''
                    }
                }

                return abb
            }, {} )

        return acc
    }, {} )


console.log( 'After', Object.keys( result['presets'] ).length )
fs.writeFileSync( 
    './data/3-transform.json', 
    JSON.stringify( result, null, 4 ), 
    'utf-8' 
)