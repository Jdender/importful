import { walk } from './walk';

// Return a promise for a array of promises to imported modules
export const importful = async (dir: string) =>
    (await walk(dir))
    .map(file => import(file));

export default importful;
export * from './walk';
