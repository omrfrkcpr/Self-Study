# JS RECAP:

https://docs.google.com/presentation/d/1ABvXuGOV33jxVCw1Etl8AmLB9yUxD4Dceqq7XI9eBJc

# NODEJS SETUP:

### NodeJS

- Download & instal from officialSite: https://nodejs.org
- Documents: https://nodejs.org/api

#### Check versions:

```sh
    $ node -v
    $ npm -v
```

### NPM

```sh

    $ npm -h # $ npm help
    $ npm list -h # $ npm help list

    $ npm init -y # create package.json
    $ npm list # $ npm ls

    $ npm install express --save # dependencies # package.json/scripts -> "start": "node index.js"
    $ npm i express

    $ npm i nodemon --save-dev # devDependencies # package.json/scripts -> "devStart": "nodemon index.js"
    # $ npm run devStart # yarn devStart
    # $ npm i nodemon --save-optional # optionalDependencies # package.json/scripts -> "optionalStart": "nodemon index.js"

    $ npm install # install all packages from package.json
    $ npm i --omit=dev # $ npm i --omit dev # install packages without devDependencies list.

    # GLOBAL
    $ npm --global list
    $ npm -g list
    $ npm i -g nodemon
    $ nodemon -v

    # NPX
    $ npx create-react-app newfolder # Ctrl+C
```

### NodeShell

```sh
    $ node
    > console.log('Hello World')
    > let moduleName = require("module")
    > moduleName.builtinModules // Show included modules.
    > .exit

```

- Create New File: index.js

```
let node = 'NodeJS'

console.log(`------*------
    ${node}
------*------`);
```

```sh
    $ node index.js
    $ node index
    $ node . # default: index.js
```

```sh
    $ nodemon index.js
    $ Ctrl + C
    $ nodemon # default: index.js or package.json.default
    $ Ctrl + C
```
