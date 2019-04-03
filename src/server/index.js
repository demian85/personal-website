import 'dotenv/config';

import * as http from 'http';
import * as express from 'express';
import compression from 'compression';

import webRouter from './routes';

const app = express();
const server = http.Server(app);

app.set('views', `${process.cwd()}/src/client/views`);
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(compression());
app.use(express.static(`${process.cwd()}/build/client/public`));
app.use('/', webRouter);

server.listen(process.env.PORT, () => {
  console.log('App is running on port', process.env.PORT);
});
