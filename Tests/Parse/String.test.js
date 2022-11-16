
import { assertEquals } from 'Assert'
import { parse } from 'Graph'


const Tests = [{
    name : `An empty string parses` ,
    test : ``
},{
    name : `A basic string parses` ,
    test : `Hello World`
},{
    name : `A string ending with an escape characters parses` ,
    test : `Hello World\\\\`
},{
    name : `A string with \\" doesn't prematurely end` ,
    test : `Hello\\"World`
}]


for ( const { name , test } of Tests )
    Deno.test(name,() => parseString(test));
    
    
function parseString ( string ){
    
    const input = `"${ string }"`;
    
    const graph = parse(input);

    assertEquals(graph.item(0),string);
}
