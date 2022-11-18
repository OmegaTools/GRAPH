
import { stringify , Node } from 'Graph'
import { assertEquals } from 'Assert'


const minified = 'Y{40}Z{20}X{60}Testing{0,0,0,1,1,1,1,0}Model{"Default"}';

Deno.test(`Minified input is as expected`,() => {
    
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

    const text = stringify(graph,{ 
        minify : true
    });

    assertEquals(text,minified);
    
})
