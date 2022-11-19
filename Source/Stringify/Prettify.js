
import { string , number } from './Common.js'
import minify from './Minify.js'
import Node from '../Node.js'


const Newline = '\n';


export default function ( graph , options ){
    
    const {
        indentation = 4 ,
        lineDepth = 60
    } = options;
    
    const Indentation = ' '.repeat(indentation);
    
    
    const indent = ( string ) =>
        Indentation + string
    
    const node = ( name , value ) =>
        `${ name } { ${ value } }`


    function object ( item ){
        return (item instanceof Node)
            ? stringify(item)
            : assignment(item) 
    }
    
    function assignment ( item ){
        
        const { name , value } = item;
        
        return node(name,normalize(value));
    }
    
    function normalize ( value ){
        
        if(typeof value === 'string')
            return string(value)
        
        if(Array.isArray(value))
            return value.join(' , ')
            
        return value
    }
    
    const Types = {
        'object' : object ,
        'string' : string ,
        'number' : number
    }
    
    const toString = ( item ) =>
        Types[typeof item](item)
    
    
    function decorate ( content ){
        return content
            .split(Newline)
            .map(indent)
            .join(Newline);
    }


    function stringify ( node ){
        
        const { name } = node;
        
        const content = 
            decorate(toContent(node));
        
        return `${ name } {${ Newline }${ content }${ Newline }}`
    }


    function toContent ( node ){
        
        const { items } = node;
        
        const content = items
            .map(toString)
            .join(Newline);
            
        return content
    }
    
    
    let process = toContent;
    
    if(options.printRoot)
        process = stringify;
    
    return process(graph)
}
