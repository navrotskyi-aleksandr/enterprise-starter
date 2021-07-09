# Cree

## Install

- Install **node.js**
- Install **angular** and **nx**

      `npm i -g @angular/cli nx`

- Clone the project

      `git clone git@ssh.dev.azure.com:v3/cree-buildings/Platform/Portal`

- Install Dependencies

      `cd Portal && npm i`

## NX

- Nx is a smart and extensible build framework to help you architect, test, and build at any scale — integrating seamlessly with modern technologies and libraries while providing a robust CLI, caching, dependency management, and more. Please look at documentation `https://nx.dev/latest/angular`

## Types of Libraries

- shell
- layout
- feature
- data-access
- ui
- util

## Scopes of Applications

- cree-web
- cree-mobile
- cree-desktop

## Generate a Feature library

Run `nx g @nrwl/angular:lib --directory=cree/home feature --tags=type:feature,scope:home --standaloneConfig` to generate a library.
then `nx g @nrwl/workspace:convert-to-nx-project --all`(It tmp command because of defect from nx)

Libraries are shareable across libraries and applications. They can be imported from `@portal/cree/home/feature`.

## Generate a Component and import to Feature library

Run `nx g @nrwl/angular:component home --project=cree-home-feature`

## Generate a Shell library

Run `nx g @nrwl/angular:lib --directory=cree/home shell-web --routing --parentModule=apps/cree-web/src/app/app-routing.module.ts --lazy --tags=type:shell,scope:home --standaloneConfig` to generate a library.
then `nx g @nrwl/workspace:convert-to-nx-project --all`(It tmp command because of defect from nx)

## Generate a Data-access library

Run `nx g @nrwl/angular:lib --directory=cree/home data-access --tags=type:data-access,scope:home --standaloneConfig` to generate a library.
then `nx g @nrwl/workspace:convert-to-nx-project --all`(It tmp command because of defect from nx)

## Generate a Service and import to Data-access library

`nx g @nrwl/angular:service home-facade --project=cree-home-data-access`

## Generate a UI library

`nx g @nrwl/angular:lib ui-components --directory=cree/shared --tags=type:ui,scope:shared --standaloneConfig`
then `nx g @nrwl/workspace:convert-to-nx-project --all`(It tmp command because of defect from nx)

## Generate a Module, Component and import to UI library

`nx g module button --project=cree-shared-ui-components && nx g component button --project=cree-shared-ui-components --export`

## Remove Library

Run `nx g @nrwl/workspace:remove data-access-auth`

## Move Library

Run `nx g @nrwl/workspace:move --project data-access-auth shared/some-lib`

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via Jest

Run `nx affected:test` to execute the unit tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Run Storybook

`npm run storybook`

## Angular Stack

- npm | Package Manager
- NX | Enterprise Tool
- Push Based Pattern | State Management
- PrimeNG | Angular UI Component
- Prettier | Code Formatter.
- Storybook | UI Components Explorer.
- JEST | Unit Tests.
- ESLint | Linter
- Quicklink | Preload Strategy.
- BEM | CSS Mehtodology

## Improvements

- Check all the Subscription
- Implement Translate Service
- Add track by for all the ngFor
- Remove all the functions in templates
- Naming for BEM in Angular
- Azure  @azure/ng-deploy
