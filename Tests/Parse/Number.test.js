
import { assertEquals } from 'Assert'
import { parse } from 'Graph'


const Tests = [{
    name : `An integer parses` ,
    test : [ '420' , 420 ]
},{
    name : `A positive number parses` ,
    test : [ '+30' , 30 ]
},{
    name : `A negative number parses` ,
    test : [ '-10' , -10 ]
},{
    name : `A float parses` ,
    test : [ '6.283185' , 6.283185 ]
}]


for ( const { name , test } of Tests )
    Deno.test(name,() => parseNumber(...test));
    
    
function parseNumber ( input , number ){
    
    const graph = parse(input);

    assertEquals(graph.item(0),number);
}
