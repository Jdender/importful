# importful

Simple automatic importer. You pass a string and get an array of modules back.

## Install

```bash
yarn add importful
```

## Usage 

```ts
import importful from 'importful';
import { join } from 'path';

const routesPath = join(__dirname, './routes');

void async function() {

    const modules = await importful(routesPath);

    // Use modules
}();
```

Note: `modules` here is a `Promise<any>[]`, to switch to a all or nothing approach use `Promise.all()` to get a `Promise<any[]>`.

## Author

* **Jdender** - [GitHub](https://github.com/jdenderplays)

## License

This project is licensed under the AGPL 3.0 License - see the [license](LICENSE) file for details.
