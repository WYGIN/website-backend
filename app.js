const createError = require("http-errors");
const express = require("express");
const { isMulterError, multerErrorHandling } = require("./utils/multer");
const cors = require("cors");

// Attach response headers
const responseHeaders = require("./middlewares/responseHeaders");

// import app middlewares
const AppMiddlewares = require("./middlewares");

// import routes
const indexRouter = require("./routes/index");

const app = express();

app.options('https://3000-wygin-realdevsquardweb-elvklufz7xh.ws-us98.gitpod.io/?code=507bcb1779dbdb9306ff&state=https%3A%2F%2F8000-wygin-websitebackend-tqf7xjfehsf.ws-us98.gitpod.io', cors())

// Add Middlewares, routes
AppMiddlewares(app);
app.use("/", responseHeaders, indexRouter);

// app.use(cors({ origin: '*' }));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (isMulterError(err)) {
    multerErrorHandling(err, req, res);
  } else {
    res.boom.notFound(err);
  }
});

module.exports = app;
