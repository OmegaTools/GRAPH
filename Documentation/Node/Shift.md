
# .shift()

Removes and returns the first item in the node.

<br>

## Usage

```js
const item = node.shift();
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
node.shift(); // Returns 1
```

<br>

#### Properties Node

```graph
{ a { 1 } b { 2 } }
```

```js
node.shift(); // Returns Node(a)
```

<br>

#### Empty Node

```graph
{ }
```

```js
node.shift(); // Returns undefined
```

<br>
