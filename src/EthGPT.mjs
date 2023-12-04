import { keyPathToValue, printMessages } from './helpers/mixed.mjs'
import { config } from './data/config.mjs'
import { presets as pre } from './data/presets.mjs'
import fs from 'fs'


export class EthGPT {
    #config
    #presets


    constructor() {
        this.#config = config
        this.setPresets( { 'presets': pre } )
    }


    getPresets() {
        return this.#presets
    }


    setPresets( { presets } ) {
        // const [ messages, comments ] = this.#validatePresets( { presets } ) 
        // printMessages( { messages, comments } )

        this.#presets = Object
            .entries( presets['presets'] )
            .reduce( ( acc, a, index ) => {
                const [ requestType, v ] = a
                acc[ requestType ] = Object
                    .entries( v )
                    .reduce( ( abb, b, rindex ) => {
                        const [ key, value ] = b
                        abb[ key ] = value
                        abb[ key ]['input']['variables'] = Object
                            .entries( abb[ key ]['input']['variables'] )
                            .reduce( ( aaa, b, rindex ) => {
                                const [ _key, _value ] = b
                                aaa[ _key ] = _value

                                if( aaa[ _key ]['validation']['enum'] === null ) {

                                    const find = keyPathToValue( { 
                                        'data': presets, 
                                        'keyPath': _value['validation']['regex']
                                    } )

                                    aaa[ _key ]['validation']['regex'] = find['regex']
                                    aaa[ _key ]['validation']['description'] = find['description']
                                }

                                return aaa
                            }, {} )

                        return abb
                    }, {} )

                return acc
            }, {} )

        return this
    }


    openAiSchema( { title, description, version, url } ) {
        const struct = {
            'openapi': '3.1.0',
            'info': null,
            'servers': [],
            'paths': null,
            'comments': {
                'schemas': {}
            }
        }
        
        struct['info'] = [ 
            [ 'title', title ],
            [ 'description', description ],
            [ 'version', version ]
        ]
            .reduce( ( acc, a, index ) => {
                const [ key, value ] = a 
                acc[ key ] = value
                return acc
            }, {} )
        
        struct['servers']
            .push( { url } )
        
        struct['paths'] = Object
            .entries( this.#presets )
            .reduce( ( acc, a, index ) => {
                const [ id, v ] = a
                let route = ''
                const tmp = Object
                    .entries( v )
                    .reduce( ( abb, b, rindex ) => {
                        const [ requestType, vv ] = b
                        route = vv['route']
                        abb[ requestType.toLowerCase() ] = Object
                            .entries( vv )
                            .reduce( ( aaa, c, pindex ) => {
                                const [ key, value ] = c 
                                switch( key ) {
                                    case 'description':
                                        aaa[ key ] = value 
                                        break
                                    case 'route':
                                        aaa['operationId'] = `${id}_${requestType}` 
                                        aaa['deprecated'] = false
                                        break
                                    case 'input':
                                        aaa['parameters'] = Object
                                            .entries( value['variables'] )
                                            .map( d => {
                                                const [ name, vvv ] = d
                                             
                                                const struct = {
                                                    name,
                                                    'in': vvv['queryType'],
                                                    'required': vvv['required'],
                                                    'description': vvv['description'],
                                                    'schema': {
                                                        'type': null
                                                    }
                                                }

                                                if( vvv['validation']['enum'] !== null ) {
                                                    struct['schema']['enum'] = vvv['validation']['enum']
                                                }

                                                struct['schema']['type']  = vvv['type']

                                                switch( vvv['type'] ) {
                                                    case 'array':
                                                        struct['schema']['items'] = {
                                                            'type': 'string'
                                                        }
                                                        break
                                                    default:
                                                        break
                                                }

                                                return struct
                                            } )

                                        break
                                    default:
                                        break
                                }
                                return aaa
                            }, {} )
                        return abb
                    }, {} )

                route = route
                    .split( '/' )
                    .map( a => {
                        if( a.startsWith( ':' ) ) {
                            let str = ''
                            str += a.replace( ':', '' )
                            str = `{${str}}`
                            return str
                        } else {
                            return a
                        }
                    } )
                    .join( '/' )
                acc[ '/' + route ] = tmp

                return acc
            }, {} )
            

        return struct
    }
}