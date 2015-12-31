'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import morgan from 'morgan';
import cons from 'consolidate';
import {routes as routes} from './app/router';

const app = express();

app.engine('ejs', cons.ejs);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(express.static(__dirname + '/app/_public'));
app.use(morgan('dev'));

routes(app);

const server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


