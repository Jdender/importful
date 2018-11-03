import { promises as fsp } from 'fs';
import path = require('path');

// Turn a nested array to a array
const flattenArray = <T>(arr: T[][]) => arr.reduce((acc, val) => acc.concat(val), []);

// Short for fs.stat.isDirectory
const isDirectory = async (dir: string) => (await fsp.stat(dir)).isDirectory();

// tslint:ignore-next-line no-use-before-declare
const walkFile = (dir: string) => (file: string) => walk(path.join(dir, file));

// Reads a dir and returns nested array of files
const readDir = async (dir: string) => Promise.all((await fsp.readdir(dir)).map(walkFile(dir)));

// Same as above but a normal array
const readDirFlat = async (dir: string) => flattenArray(await readDir(dir));

// Walks the file tree
export const walk = async (dir: string): Promise<string[]> =>
    await isDirectory(dir)
    ? readDirFlat(dir)
    : [dir];
