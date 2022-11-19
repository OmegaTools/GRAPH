
import stringify from './Stringify/Prettify.js'


const 
    { isInteger } = Number ,
    { entries } = Object ;


export default class Node {
    
    #properties = {}
    #items = []
    
    name = 'Root'
    
    
    /**
     *  Append one or more items to the node.
     */
    
    push ( ... items ){
        this.#items.push(...items);
    }
    
    
    /**
     *  Pop the last value on the node.
     */
     
    pop (){
        return this.#items.pop();
    }
    
    
    /**
     *  Shift one or more items into the node.
     */
    
    unshift ( ... items ){
        this.#items.unshift(...items);
    }
    
    
    /**
     *  Shift an item from the node.
     */
    
    shift (){
        return this.#items.shift();
    }
    
    
    /**
     *  Appends a named item to the node.
     *  If the index is given, inserts
     *  it at that position instead.
     *
     *  @param name Name of the item.
     *  @param value Value of the item.
     *  @param index Position of insertion.
     */
     
    assign ( name , value , index ){
        
        const { items } = this;
        
        index ??= items.length - 1;
        
        let item = { name , value };
        
        if(value instanceof Node){
            value.name  = name;
            item = value;
        }
        
        items.splice(index,0,item);
        this.#properties[name] = index;
    }
    
    
    /**
     *  Returns the item at the given position.
     *  Negative indexes start from the end.
     *  @param index Index of the item.
     */
     
    item ( index ){
        return this.items.at(index)
    }
    
    
    /**
     *  Returns the value or node uniquely
     *  associated with the given name.
     *  @param name Name of the property.
     */
    
    named ( name ){
        
        console.log(name,this.#properties)
        
        const index = this.#properties[name];
        
        if(isInteger(index)){
            
            const item = this.item();
            
            if(item instanceof Node)
                return item
            
            return item?.value
        }
    }
    
    
    /**
     *  A list of all items.
     */
     
    get items (){
        return this.#items
    }
    
    
    /**
     *  The nodes item count.
     */
    
    get size (){
        return this.items.length;
    }
    
    
    /**
     *  Stringifies this node and all of it's value.
     */
     
    toString (){
        return stringify(this,{ printRoot : true });
    }
    
    
    /**
     *  Generate a node from raw graph data.
     */
    
    static from ( data ){
        
        const { name , value } = data;

        const graph = new Node;
        graph.#items = value;
        graph.name = name ?? 'Root';
        
        for ( const [ index , item ] of entries(value) )
            if(typeof item === 'object')
                integrate(index,item);
        
        
        function integrate ( index , item ){
            
            const { value , name } = item;

            graph.#properties[name] = index;

            if(Array.isArray(value)){

                const { length } = value;

                switch ( true ){
                case length < 1 :
                    graph.#items[index] = null;
                    return
                case length === 1 :
                    graph.#items[index] = value[0];
                    return
                default:
                    graph.#items[index] = Node.from(item);
                    return
                }
            }
        }
            
        return graph
    }
}
