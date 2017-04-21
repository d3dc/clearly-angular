### Boilerplate for creating Angular applications with clarity and Clarity.

# This is Clearly Angular.


Todo
----------------------------------
- [x] Nav service
- [ ] Auth Module
  - [ ] Auth Reducer
  - [ ] Auth Actions
  - [ ] Auth Effects
  - [ ] Example Auth Service
- [ ] Use upcoming @ngrx v4 mono-repo for managing reducers from feature modules
- [ ] Multiple Platforms
    - [ ] Good way to include platform specific views for components that isn't just copying files
        - [ ] use environment?
        - [ ] when does angular inline?

Getting started
----------------------------------
This seed version provides the following out of the box:

- Angular 2 application with:
    - [angular/router](https://github.com/angular/angular) - Angular Router
    - [clarity-icons](https://www.npmjs.com/package/clarity-icons)
    - [clarity-ui](https://www.npmjs.com/package/clarity-ui)
    - [clarity-angular](https://www.npmjs.com/package/clarity-angular)
    - [ngrx/store](https://github.com/ngrx/store) - RxJS powered state management for Angular apps, inspired by Redux
    - [ngrx/effects](https://github.com/ngrx/effects) - Side effect model for @ngrx/store
    - [ngrx/router-store](https://github.com/ngrx/router-store) - Bindings to connect angular/router to @ngrx/store
    - [ngrx/store-devtools](https://github.com/ngrx/store-devtools) - Instrumentation for @ngrx/store enabling time-travel debugging
    - [codewareio/ngrx-store-freeze](https://github.com/codewareio/ngrx-store-freeze) - A @ngrx/store meta reducer that prevents state from being mutated
    - [reselect](https://github.com/reactjs/reselect) - Selector library for Redux
    - [Redux Beacon](https://github.com/rangle/redux-beacon) - Analytics integration for Redux and ngrx/store
- Development and production builds
- Unit test setup with Jasmine and Karma
- End-to-end test setup with Protractor
- SASS processor
- TSLint
- And other goodies that come with [Angular-CLI](https://github.com/angular/angular-cli#generating-and-serving-an-angular2-project-via-a-development-server) (v1.0.0-beta.20-4)

#### Installation
*Prerequisite*: Please install Angular-CLI by following [these instructions](https://github.com/angular/angular-cli#installation).
*Note*: Even though it's optional, we recommend you to use [yarn](https://yarnpkg.com/) instead of `npm install` for installing the dependencies.

```bash
git clone https://github.com/vmware/clarity-seed.git
cd clarity-seed

# install the project's dependencies
yarn # or run "npm install"

# starts the application in dev mode and watches your files for livereload
ng serve
```

#### Using Angular-CLI
```bash
# generating a new component
ng g component my-new-component

# generating a new directive
ng g directive my-new-directive

# to learn more about Angular-CLI commands and their usages
ng help
```

For comprehensive documentation on Angular-CLI, please see their [github repository](https://github.com/angular/angular-cli).

#### Test and build scripts

```bash
# running unit tests
ng test

# running e2e tests
ng e2e

# dev build
ng build

# prod build
ng build --prod
```

## Documentation

For documentation on the Clarity Design System, including a list of components and example usage, see [the clarity website](https://vmware.github.io/clarity).
For documentation on @ngrx, see [the @ngrx website](http://ngrx.github.io/).


#### Directory structure
```
.
├── README.md

├── karma.conf.js              <- configuration of the test runner
├── package.json               <- dependencies of the project
├── protractor.config.js       <- e2e tests configuration
├── src/                       <- source code of the application
│   ├── shared/     <- code for all platforms
│   │   └── core/   <- an example feature module
│   │       └── component/
│   │           │       └── <component>.component.html
│   │           │       └── <component>.component.scss
│   │           │       └── <component>.component.spec.ts
│   │           │       └── <component>.component.ts
│   │           └── core.module.ts
│   │           └── core.routing.ts
│   ├── web/        <- platform specific code for the web
│   │   └── web.component.html
│   │   └── web.component.scss
│   │   └── web.component.ts
│   │   └── web.e2e-spec.js    <- sample e2e spec file
│   │   └── web.module.ts
│   │   └── web.routing.ts
│   └── main.web.ts            <- boostrap file for running your angular app on the web
│   └── index.html
├── angular-cli.json           <- configuration of the angular-cli
├── tsconfig.json              <- configuration of the typescript project
├── tslint.json                <- sample configuration file for tslint
└── yarn.lock
```

## License

The clearly-angular project is licensed under the MIT license.

## Feedback

If you find a bug or want to request a new feature, please open a [GitHub issue](https://github.com/d3dc/clearly-angular/issues).
