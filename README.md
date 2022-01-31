# Jamstack POC

This is a proof of concept (POC) to demonstrate some capabilities and limitations of a static site (Jamstack).

POC Demo: https://elte156-static-poc.netlify.app

The goal is to create a site that can:

- Be deployed as a static site on a PaaS (Netlify/Heroku/Vercel)
- Submit to an API without exposing API credentials on the client side
- Implement feature flags to toggle a UI element

## Features

### Netlify Integration

Currently using [Netlify](https://www.netlify.com/) as the selected PaaS.

### Serverless Functions

This single page application has two buttons available on the index page: `Get Time` and `Get a Pokemon`.

- `Get Time` will make a HTTP GET request to a serverless function to return the current time in UTC.
- `Get a Pokemon` will make a HTTP GET request a serverless function (that acts as a proxy) which in turn calls [PokeAPI](https://pokeapi.co/) for a random Pokemon name. This proxy could easily store sensitive API credentials if needed.

### Feature Flags

Currently using [Split](https://www.split.io/) to implement feature flagging.

- A flag called `pokemon_image` was created in their [interface](https://app.split.io/) to return `on` or `off`.
- When turned `on`, an image of Pikachu is visible on the page.
- Demo shows a 50% chance for the wild Pokemon to appear (showcasing the traffic percentage allocation)
- Check JS Console to see Split SDK events

## Resources

- [Connect Angular to Netlify](https://www.netlify.com/blog/2019/09/23/first-steps-using-netlify-and-angular/)
- [Serverless Functions on Netlify Tutorial](https://explorers.netlify.com/learn/up-and-running-with-serverless-functions)
- [Options for Integrating APIs into a Jamstack](https://www.raymondcamden.com/2019/07/25/multiple-ways-of-api-integration-in-your-jamstack)
  - Direct call to the API
  - Using a proxy/serverless function to encapsulate API credentials
  - Calling the API during compile time to inject as a pre-render
- [Feature Flag LaunchDarkly + Netlify](https://www.netlify.com/blog/2021/10/27/how-to-use-launchdarkly-feature-flags-with-netlify/)
  - No free trial offered; Going to try out Split.io
- [Feature Flag Split.io Angular Tutorial](https://www.split.io/blog/continuous-deployment-in-angular/)
  - [Sample Angular + Split.io Project](https://github.com/splitio-examples/split-angular-basketball-app-example)
- [Three Different Approaches to Feature Flagging](https://danielk.tech/home/add-feature-toggling-to-your-angular-app-the-ultimate-guide-2021)
  - Angular's Environment.ts (Rebuild Required)
  - Static Assets JSON file (Can edit file on a live server)
  - HTTP called Remote JSON file (Hosted on Git and read before rendering)

## TODO

- [ ] Figure how to secure a serverless function since it's just a proxy to the real API.
  - Are there rate limiting functions?
  - Does Angular have built in ways to protect an API endpoint?

## Commands

Install Angular CLI and create project

```bash
npm install -g @angular/cli
ng new static-poc
```

Install Netlify CLI and Login

```bash
npm install netlify-cli --global
ntl login
```

Connect local project with Netlify

```bash
ntl init
```

Start development server (includes Angular + Serverless Functions)

```bash
ntl dev
```

Create a serverless function

```bash
ntl functions:create aloha-world
```

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
