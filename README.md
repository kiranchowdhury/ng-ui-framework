# Skeleton for web app using AngularJS+Material Design+TypeScript+Webpack


The intention of this repository is to modernize the frontend devolopment using [AngularJS](https://github.com/angular/angular.js). This repository provides the skeleton for [AngularJS](https://github.com/angular/angular.js) projects, in such a way that it can be easily moved to [Angular](https://angular.io/). It also uses [AngularJS Material Design](https://material.angularjs.org/latest/) for various UI components. 
This project is using [NPM](https://github.com/npm/npm) as package manager, [TypeScript](https://github.com/Microsoft/TypeScript) and [Webpack](https://github.com/webpack/webpack) as module loader.

This is, by no means, ment to be used blindly in production.

## Features
- [x] TypeScript 2
- [x] TSLint
- [x] @types
- [x] Webpack 3 + Webpack dev server
- [ ] Karma + Jasmine (Comming Soon)
- [ ] Protractor
- [x] Styling using SASS
- [x] NPM
- [x] Code Coverage
- [x] AngularJS 1.6
- [x] UI Router 1+
- [x] Strict DI using [ngAnnotate](https://github.com/olov/ng-annotate)
- [x] Production build containing chunks

## Usage
To use this starter you can simply clone it to your prefered location by using

```
 git clone https://github.com/kiranchowdhury/ng-ui-framework.git <directory_name> --depth=1
 cd <directory_name>
```

and then install the dependencies

```
 npm install
```

Once the repository has been cloned locally, you can use the following CLI commands:

```
npm start
```

To run the production build, use:

```
npm run build:prd
```

If you would like to test the production build by running `http-server`, use

```
npm run serve:prd
```