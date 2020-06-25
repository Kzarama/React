# React

![](img/react.png)

A javascript library for building interfaces; can make a interfaces for mobile and web; react is declarative this is that we are told what to do and not how to do it; use JSX that is HTML in JS; Is a single page application, have two libraries:

- React-DOM: web pages applications
- React-Native: mobile applications

## Components

React is structured in components that are classes, that are little blocks and make one application
Element is an object

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

---

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

- modules = folder with the dependencies of node js
- package.js = manage the projects and have the dependencies of production of the project
- public = folder with the files of the project
- src = folder of source code of the project
  - index.js = file that render the view, is the entry point of the application
  - App.js = components in jsx of react that react-dom convert in html

---
