# Jamstack POC

This is a proof of concept (POC) to demonstrate some capabilities and limitations of a static site (Jamstack).

The goal is to create a site that can:

- Be deployed as a static site on a PaaS (Netlify/Heroku/Vercel)
- Submit to an API without exposing API credentials on the client side
- Implement feature flags to toggle a UI element

## Resources

- [Connect Angular to Netlify](https://www.netlify.com/blog/2019/09/23/first-steps-using-netlify-and-angular/)
- [Feature Flag LaunchDarkly + Netlify](https://www.netlify.com/blog/2021/10/27/how-to-use-launchdarkly-feature-flags-with-netlify/)

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
