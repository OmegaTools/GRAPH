
import { parse } from 'Graph'
import { file } from './Paths.js'


const 
    { readTextFile } = Deno ,
    { clear , log } = console ;


clear();

log('Reading Example.graph');

const 
    text = await readTextFile(file) ,
    graph = parse(text) ;

log(graph.toString());
