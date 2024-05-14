require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res)=>{
  res.send("<h1> Hello World </h1>");
})

app.get('/twitter', (req, res) => {
  res.send("<h1> I_am_rohan </h1>")
})

app.get('/login', (req, res) => {
  res.send('<h1> Please login @ chai aur code </h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h1> Chai Aur Code </h1>')
})

// app.listen(port, ()=>{
//   console.log(`Example app listening on port ${port}`)
// })

//getting port from .env file
app.listen(process.env.PORT, ()=>{
  console.log(`Example app listening on port ${port}`)
})