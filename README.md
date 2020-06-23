# React

![](img/react.png)

A javascript library for building interfaces; can make a interfaces for mobile and web; react is declarative this is that we are told what to do and not how to do it; use JSX that is HTML in JS; Is a single page application, have two libraries:

- React-DOM: web pages applications
- React-Native: mobile applications

## Components

React is structured in components that are classes, that are little blocks and make one application
Element is an object

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
