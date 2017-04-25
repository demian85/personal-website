require('dotenv').config();

const server = require('./lib/app');

server.listen(process.env.PORT, function () {
  console.log('App is running on port', process.env.PORT);
});
