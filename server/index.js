const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from Node API Edit');
});

app.post('/api/products', (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

mongoose.connect("mongodb+srv://dalarcoinmusic:livp3bwhgPoOHZZ4@backenddb.sauah.mongodb.net/DocType?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
  console.log("Connected to database!")
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
})
.catch(() => {
  console.log("Connection Failed")
})