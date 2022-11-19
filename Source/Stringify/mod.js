
import prettify from './Prettify.js'
import minify from './Minify.js'


export default function ( graph , options = {} ){
    
    let process = prettify;
    
    if(options.minify)
        process = minify;
        
    return process(graph,options)
}
