# URL Zoo
URL Zoo is a web app that makes URLs simple. What is unique about URL Zoo is the way in which it simplifies URLs for the user. It grabs a random **verb** and **animal** from an array and pairs it together, creating a simple url which is easy to remember! (E.g. SmokingPanda)
Click here for the [live demo](https://urlzoo.herokuapp.com/).

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

### Technologies

URL Zoo was built using the universal Javascript approach and employs Javascript across the full-stack. It includes the following:

* [**Mongodb:**](https://www.mongodb.com/) an open source database that uses a document-oriented data model.
* [**Express:**](http://expressjs.com/) a web application framework.
* [**React:**](https://facebook.github.io/react/) a declarative, efficient, and flexible JavaScript library for building user interfaces.
* [**Node.js:**](https://nodejs.org/en/) an open-source, cross-platform JavaScript runtime environment.
* [**Bootstrap:**](http://getbootstrap.com/) a front-end web framework for designing websites.

### Future improvements

* The app is still not fully responsive, and needs a front-end overhaul.
* Display error messages when the user inputs wrong URLs.
* Offer individual statistics about each link: track number of times visited, date added, time and date visited, etc.


### Credits

This app was created following [Andrew Hansen's](https://github.com/arahansen) mern-tutorial.
* [Mern-tutorial repo](https://github.com/arahansen/mern-tutorial)
* [Video walkthrough of tutorial](https://www.youtube.com/watch?v=YAayQekE8po&t=5s)
