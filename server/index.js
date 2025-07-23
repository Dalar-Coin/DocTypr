const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user.model.js')
const userRoute = require('./routes/user.route.js')
const app = express()
const cors = require('cors')

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//routes
app.use('/api/users', userRoute)

app.get('/', (req, res) => {
  res.send('Hello from Node API Edit')
})

mongoose
  .connect(
    'mongodb+srv://dalarcoinmusic:livp3bwhgPoOHZZ4@backenddb.sauah.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB'
  )
  .then(() => {
    console.log('Connected to database!')
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })
  .catch(() => {
    console.log('Connection Failed')
  })
