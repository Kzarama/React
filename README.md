# React

![](img/react.png)

To see more projects of React

- [react-video](https://github.com/Kzarama/react-video)
- [rick-and-morty](https://github.com/Kzarama/rick-and-morty)

A javascript library for building interfaces; can make a interfaces for mobile and web; react is declarative this is that we are told what to do and not how to do it; use JSX that is HTML in JS; Is a single page application, have two libraries:

- React-DOM: web pages applications
- React-Native: mobile applications

## To create app

### To create react app using npm

To install create-react-app global(-g)

```bash
npm install -g create-react-app
```

To create react app

```bash
create-react-app APP
```

### To create react app using npx (without install create-react-app)

Create app without install react using npm(npx for install without install react)

```bash
npx create-react-app APP
```

### To create manually

Create a folder for the project

```bash
mkdir PROJECT_NAME
```

Enter in the folder

```bash
cd PROJECT_NAME
```

Initialize a repository

```bash
git init
```

Initialize the project (-y for pre-configurations of the project)

```bash
npm init -y
```

Then create a folder called src, public. In public folder create index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>TITLE</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Install react and react-dom in the project

```bash
npm install react react-dom
```

Babel = is a javascript tool that transform the code so that all browsers can use it
Install babel in the project

```bash
npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

Create babel file called .babelrc and put inside

```
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

Webpack = is a tol that help to compile the code of multiple files in only one, that have the code ready for the production

```bash
npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev
```

In a new file called webpack.config.js put

```js
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
```

In package.js in the scrips add

```json
"build": "webpack --mode production",
"start": "webpack-dev-server --open --mode development"
```

Compile the project

```bash
npm run build
```

To install webpack server

```bash
npm install webpack-dev-server --save-dev
```

SASS = is a preprocessor that allow make CSS but with a syntax more friendly
Styles with SASS

```bash
npm install mini-css-extract-plugin css-loader node-sass sass-loader --save-dev
```

ESLint = is a linter that helps to follow good practices and style guides for avoid errors and follow a standard
Install ESLint

```bash
npm install eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y --save-dev
```

Create a file called .eslintrc for add rules for the eslint

---

## To run the application

Enter to the folder

```bash
cd APP
```

To start the app

```bash
npm run start
```

Install dependencies

```bash
npm i
```

Delete cache and create files

```bash
npm cache clean --force
```

---

## Initial files

- node_modules = folder with the dependencies of node js
- package.js = manage the projects and have the dependencies of production of the project
- public = folder with the public files of the project
- src = folder of source code of the project
  - index.js = file that render the view, is the entry point of the application
  - App.js = components in jsx of react that react-dom convert in html

---

## Components

React is structured in components that are classes, that are little blocks and make one application
Element is an object

### Types of components

- Stateful: are the most robust, these extends from React.Component. They allow us to manage state and life cycle

- Stateless: or presentational. Are functions that return code in JSX format

### Life cycle component

- Mounting: is the introduction of the component in the dom of the index. react call the methods:
  - builder: initialize the state of the values
  - render: introduce the component in the code
  - componentDidMount: indicates the the component was mount
- Updating: the component is rendered again, maybe for update the data
  - render:
  - componentDidUpdate: indicates that the component was updated, receive two arguments: props before and the state before the update
- Unmounting: when the component leaves of the page and none requires it
  - componentWillUnmount: clean the memory

## Props

Props (Properties) arguments in a function

## Events

Events for manage actions

- onChange = for inputs
- onClick = for buttons
- onSubmit = for forms

## Hooks

Allows that the functions have features that only have the classes like:

- useState: for the manage of the states
- useEffect: for subscribe the component to its life cycle
- useReducer: execute an effect based in an action

Also allows make a custom hooks, its have to be in the function and must start with the word 'use'

## React Router

It's a tool that allows make Single Page Applications (SPA) easily

- BrowserRouter: is a component that has to be at the top of the app, all things that be inside work like a SPA.
- Route: represents a path, when match with a path make the render of the component, receive tree props: match, history, location.
- Switch: inside of this go the routes.
- Link: Take the first place of the element \<a>, avoid that reload the page and update the URL.

### To install react router

To install the react-router that use in the navigators

```bash
npm install react-router-dom
```

## Redux

Is a tool that allows store the information, the principles of redux are:

- Storage: store the state
- Immutable: ever create new states
- Centralized: the information of all application is stored here

Phases of redux:

- Store: store the information
- Reducers: states
- Action creators: functions that request for information
- Component: JSX code

---

## To deploy

Add the next line in the package.json (change USERNAME and REPOSITORY for your username and your repository)

```json
"homepage": "https://USERNAME.github.io/REPOSITORY",
```

Run this command in bash

```bash
npm install --save gh-pages
```

Add the next lines in scripts of package.json

```json
"predeploy": "npm run build",
"deploy": "gh-pages -b master -d build",
```

Deploy the project

```bash
npm run deploy
```

---
