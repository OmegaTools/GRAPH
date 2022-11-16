
# .items()

Returns the array of all items of a node.

<br>

## Usage

```js
const items = node.items();
```

<br>
<br>

## Examples

<br>

#### Simple Values

```graph
{ 1 , 'Hello World' , 3 }
```

```js
[ 1 , 'Hello World' , 3 ]
```

<br>

#### Properties

```graph
{ 1 , a { 2 } , 3 }
```

```js
[ 1 , { name : 'a' , value : 2 } , 3 ]
```

<br>

#### Nodes

```graph
{ 1 , a { 2 , 3 } , 4 }
```

```js
[ 1 , Node , 4 ]
```

<br>
