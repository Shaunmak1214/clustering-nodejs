const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

module.exports.clusterApp = () => {
  // parse json request body
  app.use(express.json());

  // enable cors
  app.use(cors());
  app.options('*', cors());

  // Enabled Access-Control-Allow-Origin", "*" in the header so as to by-pass the CORS error.
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  // Body Parser
  app.use(express.urlencoded({ extended: false }));

  // Index route
  app.get('/', (req, res) => res.send('Hello World!'));

  const PORT = process.env.PORT || 8000;

  app.listen(PORT, console.log(`Server started on port ${PORT}`));
}