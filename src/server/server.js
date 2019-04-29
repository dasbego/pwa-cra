import express from 'express'
import serverRenderer from './middleware/ssrRenderer'
import Morgan from 'morgan';

const PORT = 3000
const path = require('path')

const app = express()
const router = express.Router()

// Logger
app.use(Morgan('dev'))

router.use('/', serverRenderer)
router.use(express.static(path.resolve(__dirname, '..', '..', 'build')))

app.use(router)
app.listen(PORT, () => console.log(`Ready at: http://localhost:${PORT}`))
