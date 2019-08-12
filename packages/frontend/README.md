GameBag
=======

Angular dojo for Des Moines WebGeeks (8/12/19).

This is intended to be a small project that resembles a real project.
However, to keep things simple, some things (like state management), and multiple modules aren't included.

It's inspired by [GM Binder](https://www.gmbinder.com/)

Unit tests exist for each component and service.
I didn't have time to write e2e tests, so they probably don't work.

## Getting started

You will need to have Node installed (near version 10.15)
The project was built preferring Yarn, but NPM should work too.

Install dependencies with `yarn install` (or `npm install`).

## Running 

Use `yarn start` to run a dev server.

The default environment will make API calls to an already deployed API.
If you want to run the Rails API locally, use `yarn start:local`.

## Changes from pure Angular CLI projects

### Test Suite

Jest is a better test runner than Karma and Jasmine (not requiring a browser, generally faster, can do more).
The test are nearly the same, but if you're new to Angular bear in mind that there are some minor differences.

See this link for more information about what was involved:
https://blog.angularindepth.com/integrate-jest-into-an-angular-application-and-library-163b01d977ce

### Linter

By default the Angular CLI uses TSLint under the hood.
This is mostly fine, and I think less of an important thing to swap out then Jest.

However, TSLint will start to phase out of existence soon
(see: https://medium.com/palantir/tslint-in-2019-1a144c2317a9).
ESLint is also able to do more things than TSLint can at this point.

So I've removed TSLint in favor of ESLint, and added the AirBnB rules.
Though I've changed or disabled a few rules that conflict with Angular (empty constructors for example),
or that I think are too overzealous.

See this repo for how the chane was made: https://github.com/typescript-eslint/typescript-eslint
