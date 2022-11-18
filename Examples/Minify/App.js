
import { stringify , Node } from 'Graph'
import { file } from './Paths.js'


const 
    { writeTextFile } = Deno ,
    { clear , log } = console ;


clear();

log('Writing minified Example.graph');

const avatarPoly = [
    [ 0 , 0 ] ,
    [ 0 , 1 ] ,
    [ 1 , 1 ] ,
    [ 1 , 0 ]
]

const avatarData = 
    avatarPoly.flat();


const position = new Node;
position.assign('X',60);
position.assign('Y',40);
position.assign('Z',20);

const avatar = new Node;
avatar.assign('Testing',avatarData);

const player = new Node;
player.assign('Model','Default');
player.assign('Position',position);
player.assign('Player',avatar);


const graph = new Node;
graph.assign('Player',player);

log(graph.toString());


const text = stringify(graph,{ 
    minify : true
});

await writeTextFile(file,text);
