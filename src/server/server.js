import express from 'express'
import serverRenderer from './middleware/ssrRenderer'
import Morgan from 'morgan';

const isProd = process.env.NODE_ENV === 'production';

const PORT = 3000
const path = require('path')

const app = express()
const router = express.Router()

// Logger
const morganOptions = isProd ? 'combined' : 'dev';
app.use(Morgan(morganOptions))

router.use('/', serverRenderer)
router.use(express.static(path.resolve(__dirname, '..', '..', 'build')))

app.use(router)
app.listen(PORT, () => console.log(`Ready at: http://localhost:${PORT}`))
