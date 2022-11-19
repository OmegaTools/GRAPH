
import { string , number } from './Common.js'
import Node from '../Node.js'


const node = ( name , value ) =>
    `${ name }{${ value }}`


const Types = {
    'object' : object ,
    'string' : string ,
    'number' : number
}

const toString = ( item ) =>
    Types[typeof item](item)


function object ( item ){
    
    if( item instanceof Node )
        return minify(item);
    
    let { name , value } = item;
    
    if(typeof value === 'string')
        value = string(value);
    
    return node(name,value)
}


export default function minify ( graph ){
    
    const { items } = graph;
    
    return items
        .map(toString)
        .join('')
}
