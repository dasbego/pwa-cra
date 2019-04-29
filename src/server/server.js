import express from 'express'
import serverRenderer from './middleware/ssrRenderer'

const PORT = 3000
const path = require('path')

const app = express()
const router = express.Router()

router.use('/', serverRenderer)
router.use(express.static(path.resolve(__dirname, '..', '..', 'build')))

app.use(router)
app.listen(PORT, () => console.log(`Ready on port ${PORT}`))
