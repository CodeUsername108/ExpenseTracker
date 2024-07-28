import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import db from './db/db.js'
import 'dotenv/config'
import transactions from './routes/transactions.js'

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/v1/', transactions);
app.listen(PORT, function () {
    db()
    console.log(`Server is running on port ${PORT}`)
})
// app.get('/', function (req, res) {
//     res.send('Hello World')
// })
