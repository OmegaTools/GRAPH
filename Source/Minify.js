
import Node from './Node.js'

function toString ( item ){
    switch ( typeof item ){
    case 'object' :
    
        if( item instanceof Node )
            return minify(item);
        
        let { name , value } = item;
        
        if(typeof value === 'string')
            value = `"${ value }"`;
        
        return `${ name }{${ value }}`
    case 'string' :
        return `"${ item }"`
    default:
        return `${ item }`
    }
}


export default function minify ( graph ){
    
    const { items } = graph;
    
    return items
        .map(toString)
        .join('')
}
