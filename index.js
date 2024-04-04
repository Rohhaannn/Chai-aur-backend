const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res)=>{
  res.send("Hello World");
})

app.get('/twitter', (req, res) => {
  res.send("I_am_rohan")
})

app.get('/login', (req, res) => {
  res.send('<h1> Please login @ chai aur code </h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2> Chai Aue Code </h2>')
})

app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`)
})