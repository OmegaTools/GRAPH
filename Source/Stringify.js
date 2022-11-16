
import Node from './Node.js'

    
function indent ( string ){
    return `    ${ string }`
}

function toString ( item ){
    
    switch ( typeof item ){
    case 'object' :
    
        if( item instanceof Node )
            return stringify(item);
        
        let { name , value } = item;
        
        if(typeof value === 'string')
            value = `"${ value }"`;
        
        return `${ name } { ${ value } }`
    case 'string' :
        return `"${ item }"`
    default:
        return `${ item }`
    }
}


function decorate ( content ){
    return content
        .split('\n')
        .map(indent)
        .join('\n');
}


function stringify ( node ){
    
    const { name } = node;
    
    const content = 
        decorate(toContent(node));
    
    return `${ name } {\n${ content }\n}`
}


function toContent ( node ){
    
    const { items } = node;
    
    const content = items
        .map(toString)
        .join('\n');
        
    return content
}


export default function ( graph ){
    return toContent(graph)
}

export function printify ( graph ){
    return stringify(graph)
}
