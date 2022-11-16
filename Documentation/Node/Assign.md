
# .assign()


Append one or more items to the node.  
If the index is given, inserts it at said position.

<br>

## Usage

```js
node.assign( /* Name */ , /* Value */ );
node.assign( /* Name */ , /* Value */ , /* Index */ );
```

<br>
<br>

## Examples

<br>

#### One String

```js
node.assign('Message','Hello World');
```

<br>

#### One Array

```js
node.assign('Some Numbers',[ 1 , 2 , 3 ]);
```

<br>

#### One Node

```js
const player = new Node;
node.assign('Player',player);
```

<br>

#### At Position

```js
node.assign('Name','Mike',2);
```

<br>
