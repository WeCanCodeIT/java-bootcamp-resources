# JS Bundling

## Bundlers

Bundlers are used to take multiple JS modules and compile them down into one minified JS file for a production environment. They are invaluable if you are going to be making a JS heavy application.

There is one champion in this arena, [Webpack](https://webpack.js.org/). Webpack is an incredible tool that allow us to write extremely modular JS applications. It will bundle JS, CSS, images, server-side templates, etc.

Webpacks power can also be looked at as it's largest setback. Webpack can do SO much for you that its configuration gets to be a little hard to maintain. This makes it extremely hard for beginners to jump into. Luckily, we have an ou8tstanding alternative.

## Parcel

[Parcel](https://parceljs.org/) showed up in mid-2017. It does the same job as webpack but with all of the configuration built in. This is great for learning the basics of a bundling tool.

Let's get started with Parcel

## Installation

1. From your projects root directory, initialize an `npm` project if you haven't already: `npm init -y`
1. Next, install parcel: `npm i -D parcel-bundler`
1. Once Parcel is installed we need to add two commands to `"scripts"` in `package.json`:
    1. `"start": "parcel srcmain/resources/static//js/index.js",`
    1. `"build": "parcel build src/main/resources/static/js/index.js --out-dir src/main/resources/static/dist"`

## Usage

Now that we have parcel installed, We are free to write modular code! We can use either CommonJS modules or ES6 modules and when we run `npm run build`, Parcel will bundle all of our JS into one minified file that we can deliver with our production code.

## `npm start`

We can use the `npm start` command to run a temporary server which will allow us to run our code without having to build out a distributed file first=. This is great for quick looks at how our JS is running.

_CAUTION_: Since this is running it's own local server, you may have issuses with fetch requests to your own local api. Your endpoints will be different in production so keep this in mind. Third party APIs will be unaffected as we are hitting an outside resource regardless of whether we're in development or production.
