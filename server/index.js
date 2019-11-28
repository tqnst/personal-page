/* eslint consistent-return:0 */
const express = require('express');
const { resolve } = require('path');
const setup = require('./middlewares/frontendMiddleware');
const app = express();

let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const serverless = require('serverless-http');

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
//app.use(require('./controllers')); //backend api

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});


module.exports.start = serverless(app);
