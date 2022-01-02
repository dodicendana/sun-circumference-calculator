# Coding Challenge - Sun Circumference Calculator

This project was built to calculate sun circumference using the generated π value. It was built using Typescript with React framework for the Front End, Nodejs & Express for the Back End, and MongoDB for database.
New π value with more accuracy can be generated via a button in the web app. The π value can also be resetted to lowest possible accuracy via another button in the web app.  
Sun circumference value will also then be generated using the latest generated π value.

## Web App

This is the Web App of the Sun Circumference Calculator. It requests for Back End API to generate new π value & calculate the circumference of sun value, then display it. The circumference of sun value calculation follows this formula `C = πd`, while the sun diameter is approximated as 1391980 km.  
It is bootstrapped using [Create React App](https://github.com/facebook/create-react-app) & has some additional third-party library, such as:

- [Axios](https://github.com/axios/axios) - It is used for managing back end API calls. All API calls in this web app are done through Axios service.
- [Node-Sass](https://github.com/sass/node-sass) - It is used to compile .scss files to css files to be consumed for stylings.
- [Bignumber.js](https://github.com/MikeMcl/bignumber.js/) - It is used to support & calculate number with more than 15 digits as Javascript natively only supports up to 15 digits number.

### Installation

1. Install [NodeJS](https://nodejs.org/en/download/) & NPM (Node Package Manager).
2. Open terminal & change dir to this directory (`[DIR]/app`).
3. Run `npm install` from this directory to install all the other dependencies.

### Running

1. Open terminal & change dir to this directory (`[DIR]/app/`)
2. Run `npm start` to run the Web app. It will run on `http://localhost:3000/`.  
   Note: For API Calls from this web app, it is currently set to point to `http://localhost:5000/` as this is the URI set for the Back End API. 
   However, it can be changed in the config file (`[DIR]/app/src/config/config.ts`).

## Back End API

This is the Back End API of the Sun Circumference Calculator. It can calculate π & circumference of sun value on request. The π calculation formula used can be found [here](http://ajennings.net/blog/a-million-digits-of-pi-in-9-lines-of-javascript.html#:~:text=To%20use%20big%20integers%20in,i%20%2B%3D%202n%3B%20%7D%20console.).  
It is built using NodeJS & [Express](https://expressjs.com/), and use [Mongoose](https://www.npmjs.com/package/mongoose) to connect & do operation on external MongoDB server.

### Installation

1. Install NodeJS (https://nodejs.org/en/download/)
2. Open terminal & change dir to this directory (`[DIR]/api`)
3. Run `npm install -g typescript` to install typescript compiler globally
4. Run `npm install` from this directory to install all the other dependencies.

### Running

1. Open terminal & change dir to this directory (`[DIR]/api/`)
2. Run `npm start` to run the Web app. It will run on `http://localhost:5000/`.

## Versioning

1.0.0

## Authors

- **Dodi Cendana** - _Initial work_ - Coding Challenge - Sun Circumference Calculator
