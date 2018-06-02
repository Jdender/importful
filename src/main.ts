import { promises as fsp } from 'fs';
import path = require('path');

// Walks the file tree, returns flatened string array
export const walk = async (dir: string): Promise<string[]> =>
    (await fsp.stat(dir)).isDirectory()
    ? (await Promise.all(
        (await fsp.readdir(dir))
        .map(file => walk(path.join(dir, file)))
    ))
    .reduce((acc, val) => acc.concat(val))
    : [dir];

// Calls all default exports of the walk with the provided objs
export default async (dir: string, ...objs: any[]) =>
    Promise.all(
        (await Promise.all(
            (await walk(dir))
            .map(f => import(f))
        ))
        .filter(f => f.default)
        .map(f => f.default(...objs))
    );
