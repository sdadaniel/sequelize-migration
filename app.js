const express = require('express');

const morgan = require("morgan");
const nunjucks = require("nunjucks");
require("dotenv").config()


const {
  sequelize
} = require("./models");

class App {
  constructor() {
    this.app = express();
    this.middleWare();

    //Mysql Connection
    this.dbconnection();
    this.getRouteing();
    this.errorHandling();
  }

  
  dbconnection() {
    sequelize.sync({
        force: false
      })
      .then(() => {
        console.log("db Connected");
      }).catch((err) => {
        console.log("db connection failed");
      });
  }

  middleWare() {
    this.app.set("view engine", "html")
    nunjucks.configure("views", {
      express: this.app,
      watch: true,
    })

    this.app.use(morgan('dev'));
  }

  getRouteing() {
    this.app.use(require('./routes'))
  }

  errorHandling() {
    this.app.use((req, res, next) => {
      var e = new Error()
      e.status = 404;
      next(e)
    })

    this.app.use((err, req, res, next) => {
      res.render("error/error.html", {
        error: err
      })
    })

  }

}

module.exports = new App().app;