
import { assertEquals } from 'Assert'
import { parse } from 'Graph'


Deno.test(`Empty string returns an empty graph`,() => {
    
    const input = '';
    
    const graph = parse(input);

    assertEquals(graph.size,0);
    
})

Deno.test(`A graphs name is 'Root'`,() => {
    
    const input = '';
    
    const graph = parse(input);

    assertEquals(graph.name,'Root');
    
})
