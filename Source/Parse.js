
import Node from './Node.js'


const Tokens = [
    [ /^{/ , '{' , 1 ] ,
    [ /^}/ , '}'   , 1 ] ,
    [ /^\/\*/ , '/*' , 2 ] ,
    [ /^\*\// , '*/'   , 2 ] ,
    [ /^"/ , '"' , 1 ] ,
    [ /^[a-z][a-z0-9_]*/i , 'Name' ] ,
    [ /^(\+|\-)?[0-9]+(\.[0-9]+)?/ , 'Number' ] ,
    [ /^\\\S/ , 'Escaped' ] ,
]




export default function parse ( string ){
    
    const tree = buildAST(parseNumbers(dropUnknown(normalizeStrings(removeComments(toTokens(string))))));
    
    return Node.from(tree);
}


function buildAST ( tokens ){
    
    const root = { value : [] };
    
    let parent = root ,
        stack = [] ;
    
    for ( const token of tokens ){
        
        const [ type , value ] = token;
        
        
        // console.log(type,parent,stack)
        
        switch (type){
        case 'String' :
        case 'Number' :
            parent.value.push(value);
            continue
        case 'Name' :
        
            const child = { name : value , value : [] };
            parent.value.push(child);
            
            stack.push(parent);
            parent = child;
            
            continue
        case '}' :
            
            switch ( parent.value.length ){
            case 0 :
                parent.value = null;
                break;
            case 1 :
                parent.value = parent.value[0];
                break;
            }
            
            parent = stack.pop();
            continue
        }
    }
    
    
    return root
}


function findToken ( string ){
    
    for ( const [ pattern , token , length ] of Tokens)
        if(length){
            if(pattern.test(string))
                return [ token , length ]
        } else {
            
            const value = string
                .match(pattern)
                ?.at(0);
            
            if(value)
                return [ token , value.length , value ]
        }
}

function * toTokens ( string ){
    
    while ( true ){
        
        matchNext:
        
        if(string.length < 1)
            return
            
        const match = findToken(string);
        
        if(match){
            
            const [ token , take , value ] = match;
            
            yield [ token , value ]
            
            string = string.substring(take);
            
        } else {
            yield [ 'Unknown' , string.at(0) ]
            string = string.substring(1);
        }
    }
}

function * removeComments ( tokens ){
    
    let depth = 0;
    
    let process;


    const normal = ( token ) => {
        
        const [ type ] = token;
    
        if(type === '/*'){
            process = comment;
            depth++;
            return
        }
        
        return token
    }
    
    
    const comment = ( token ) => {
        
        const [ type ] = token;
        
        if(type === '*/')
            depth--;
            
        if(depth > 0)
            return
            
        process = normal;
    }
    
    
    process = normal;
    
    for ( const token of tokens ){
        
        const value = process(token);
        
        if(value)
            yield value
    }
}

function * normalizeStrings ( tokens ){
    
    let combined , process ;


    const normal = ( token ) => {
        
        const [ type ] = token;
    
        if(type === '"'){
            process = string;
            combined = '';
            return
        }
        
        return token
    }
    
    
    const string = ( token ) => {
        
        const [ type , value ] = token;
        
        if(type === '"'){
            process = normal;
            return [ 'String' , combined ]
        }
        
        combined += value;
    }
    
    
    process = normal;
    
    for ( const token of tokens ){
        
        const value = process(token);
        
        if(value)
            yield value
    }
}


function * dropUnknown ( tokens ){
    for ( const token of tokens )
        if(token[0] !== 'Unknown')
            yield token
}


function * parseNumbers ( tokens ){
    
    for ( const token of tokens ){
        
        const [ type , value ] = token;
        
        if(type === 'Number')
            token[1] = parseFloat(value);
            
        yield token
    }
}
