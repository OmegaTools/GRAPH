
# .named()

Returns any item uniquely matching the given name.

<br>

## Usage

```js
const item = node.named( /* Name */ );
```

<br>
<br>

## Examples

<br>

#### One Value

```graph
{ 1 , a : { 2 } , 3 }
```

```js
node.named('a'); // Returns 2
```

<br>

#### Invalid Name

```graph
{ 1 , 2 , 3 }
```

```js
node.named('a'); // Returns undefined
```

<br>
