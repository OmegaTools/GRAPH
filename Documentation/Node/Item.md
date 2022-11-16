
# .item()

Returns the item at the given index.  
Negative indexes start from the end.

<br>

## Usage

```js
const item = node.item( /* Index */ );
```

<br>
<br>

## Examples

<br>

#### First Item

```graph
{ 1 , 2 , 3 }
```

```js
node.item(0); // Returns 1
```

<br>

#### Last Item

```graph
{ 1 , 2 , 3 }
```

```js
node.item(-1); // Returns 3
```

<br>

#### Invalid Index

```graph
{ 1 , 2 , 3 }
```

```js
node.item(8000); // Returns undefined
```

<br>
