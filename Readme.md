# Angular library boilerplate
This project aims to create a boilerplate for angular libraries. It uses webpack to bundle the library.

Unfortunately angular-cli currently not helping us to create libraries and there are some discussions going around it. Check the discussions under these threads [Create boilerplate for library](https://github.com/angular/angular-cli/issues/1692) and [Library Support and Boilerplate Comment Thread](https://github.com/angular/angular-cli/issues/6510).

## Building the code

Run the following commands
```sh
npm install
npm run build:dist
```

Output files will be created under `./dist/` folder in the following structure.
```
dist
└───esm
│   └───src
│   │   index.d.ts
│   │   index.js
│   │   └───components
│   │   │   ...
│   │   └───pipes
│   │   │   ...
└───umd
│   angular-lib-exp.js.map
│   angular-lib-exp.js.gz
│   angular-lib-exp.js.map.gz
│   ...
```

## Testing

Run `npm test` to test the application.