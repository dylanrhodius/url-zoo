# URL Zoo
URL Zoo is a web app that makes URLs simple. What is unique about URL Zoo is the way in which it simplifies URLs. It randomly chooses a **verb** and **animal** from an array and pairs them together, creating a simple url which is easy to remember! (E.g. SmokingPanda)
Checkout the [live demo here!](https://urlzoo.herokuapp.com/)

### Installation

Ensure you have updated to the latest stable versions of Node.js and npm, and that you have MongoDB installed and available locally on port 27017.

Then:
* Clone this repo `git clone https://github.com/dylanrhodius/url-zoo.git`.
* Change into the url-zoo directory `cd url-zoo`.
* To setup environment variables, create a `.env` file in the url-zoo root directory and include the following:
```
MONGO_URL=mongodb://localhost:27017/urlzoo_test
APP_DOMAIN=localhost
PORT=3000
```
* Run `npm install` to install dependencies.

### Using the App

* Host the server by running `npm start`.
* Go to your browser and visit `http://localhost:3000/`.
* Alternatively, try the [live demo](https://urlzoo.herokuapp.com/).
* To run the tests, simply run `npm test`.

### Technologies

URL Zoo was built using the universal Javascript approach and employs Javascript across the full-stack. It includes the following:

* [**Mongodb:**](https://www.mongodb.com/) an open source database that uses a document-oriented data model.
* [**Express:**](http://expressjs.com/) a web application framework.
* [**React:**](https://facebook.github.io/react/) a declarative, efficient, and flexible JavaScript library for building user interfaces.
* [**Node.js:**](https://nodejs.org/en/) an open-source, cross-platform JavaScript runtime environment.
* [**Bootstrap:**](http://getbootstrap.com/) a front-end web framework for designing websites.

Testing:
* [**Jest:**](https://facebook.github.io/jest/) a JavaScript Testing utility for testing React.
* [**Enzyme:**](http://airbnb.io/enzyme/) a JavaScript Testing utility for testing React.
* [**Chai:**](http://chaijs.com/) a unit testing library.

### Screenshots

**Mainpage with links added**
![p1](http://i.imgur.com/mWOIajj.png)

### Future improvements

* The app is still not fully responsive, and needs a front-end overhaul.
* Change incorrect URL error message from a standard alert to a Bootstrap alert, or something fancier.
* Offer individual statistics about each link: track number of times visited, date added, time and date visited, etc.


### Credits

This app was created following [Andrew Hansen's](https://github.com/arahansen) mern-tutorial.
* [Mern-tutorial repo](https://github.com/arahansen/mern-tutorial)
* [Video walkthrough of tutorial](https://www.youtube.com/watch?v=YAayQekE8po&t=5s)
