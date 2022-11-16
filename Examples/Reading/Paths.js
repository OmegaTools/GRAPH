
import { fromFileUrl , dirname , join } from 'Path'


const folder = dirname(fromFileUrl(import.meta.url));


export const file = 
    join(folder,'Example.graph');
