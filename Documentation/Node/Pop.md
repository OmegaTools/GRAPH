
# .pop()

Removes and returns the last item in the node.

<br>

## Usage

```js
const item = node.pop();
```

<br>
<br>

## Examples

<br>

#### Array Node

```graph
{ 1 , 2 , 3 }
```

```js
node.pop(); // Returns 3
```

<br>

#### Properties Node

```graph
{ a { 1 } b { 2 } }
```

```js
node.pop(); // Returns Node(b)
```

<br>

#### Empty Node

```graph
{ }
```

```js
node.pop(); // Returns undefined
```

<br>
