import importful from '../src/main';
import { join } from 'path';

const path = join(__dirname, 'modules');

importful(path, 'foobar', 4)
.then(() => console.log('done'))
