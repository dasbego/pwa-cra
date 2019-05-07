import express from 'express'
import serverRenderer from './middleware/ssrRenderer'
import Morgan from 'morgan';
import fs from 'fs';
import https from 'https';

import { configureStore } from '../store';

const isProd = process.env.NODE_ENV === 'production';

const config = {
  cert: fs.readFileSync(__dirname + '/certificates/certificate.cert'),
  key: fs.readFileSync(__dirname + '/certificates/private.key')
};

const PORT = 443
const path = require('path')

const app = express();
const router = express.Router();

// Create store
const store = configureStore;

// Logger
const morganOptions = isProd ? 'combined' : 'dev';
app.use(Morgan(morganOptions));

router.use('/', serverRenderer(store));
router.use(express.static(path.resolve(__dirname, '..', '..', 'build')));
app.use('/sand', router);
// app.listen(PORT, () => console.log(`Ready at: https://localhost:${PORT}`))
https.createServer(config, app).listen(PORT);
