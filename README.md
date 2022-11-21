
<br>

<div align = center>

[![Badge Deno]][Deno]   
[![Badge Stars]][#]

<br>
<br>

<img
    src = 'Assets/Logo.png'
    width = 120
/>

# GRAPH

*Encoder / Decoder for [.graph] files.*

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

[Documentation]: Documentation
[Examples]: Examples
[License]: LICENSE
[#]: #

[.graph]: https://github.com/temper-studios/graph-file-format
[Deno]: https://deno.land/x/graph


<!---------------------------------[ Badges ]---------------------------------->

[Badge License]: https://img.shields.io/badge/License-AGPL3-015d93.svg?style=for-the-badge&labelColor=blue
[Badge Stars]: https://img.shields.io/github/stars/OmegaTools/GRAPH?style=for-the-badge&logoColor=white&logo=Trustpilot&labelColor=FF66AA&color=cf538b
[Badge Deno]: https://img.shields.io/badge/-Deno-58a341?style=for-the-badge&logoColor=white&logo=Deno&labelColor=64bc4b


<!---------------------------------[ Buttons ]--------------------------------->

[Button Documentation]: https://img.shields.io/badge/Documentation-04ACE6?style=for-the-badge&logoColor=white&logo=BookStack
[Button Examples]: https://img.shields.io/badge/Examples-64BC4B?style=for-the-badge&logoColor=white&logo=GitBook
