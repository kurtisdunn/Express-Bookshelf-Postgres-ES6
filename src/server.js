'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import morgan from 'morgan';
import cons from 'consolidate';
import {routes as routes} from './app/routes';
import db from './app/config/persistence';

const app = express();

app.engine('ejs', cons.ejs)
  .set('view engine', 'ejs')
  .set('views', __dirname + '/app/views')
  .use(express.static(__dirname + '/app/_public'))
  .use(morgan('dev'));

routes(app);

const server = app.listen(3000, () => {
  let port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});


