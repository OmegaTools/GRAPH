
<br>

<div align = center>

[![Badge Commit]][GitHub]   
[![Badge License]][License]   
[![Badge Stars]][GitHub]

<br>
<br>

# GRAPH

*Encoder / Decoder for  `.graph` files.*

<br>

[![Button Examples]][Examples]   
[![Button Documentation]][Documentation]

<br>
<br>

## Preview

<br>

```JavaScript
import * as Graph from 'https://deno.land/x/graph/mod.ts';
```

</div>

<br>

```JavaScript
const text = await Deno.readTextFile('Example.graph');

const graph = Graph.parse(text);
```

<br>

```JavaScript
const text = Graph.stringify(graph);

await Deno.writeTextFile('Example.graph',text);
```

<br>


<!----------------------------------------------------------------------------->

[Documentation]: https://github.com/OmegaTools/GRAPH/tree/main/Documentation
[Examples]: https://github.com/OmegaTools/GRAPH/tree/main/Examples
[License]: https://github.com/OmegaTools/GRAPH/blob/main/LICENSE
[GitHub]: https://github.com/OmegaTools/GRAPH


<!---------------------------------[ Badges ]---------------------------------->

[Badge License]: https://img.shields.io/badge/License-AGPL3-015d93.svg?style=for-the-badge&labelColor=blue
[Badge Stars]: https://img.shields.io/github/stars/OmegaTools/GRAPH?style=for-the-badge&logoColor=white&logo=Trustpilot&labelColor=FF66AA&color=cf538b
[Badge Commit]: https://img.shields.io/github/last-commit/OmegaTools/GRAPH?style=for-the-badge&logoColor=white&logo=Git&labelColor=64bc4b&color=539a3e


<!---------------------------------[ Buttons ]--------------------------------->

[Button Documentation]: https://img.shields.io/badge/Documentation-blue?style=for-the-badge&logoColor=white&logo=BookStack
[Button Examples]: https://img.shields.io/badge/Examples-64BC4B?style=for-the-badge&logoColor=white&logo=GitBook
