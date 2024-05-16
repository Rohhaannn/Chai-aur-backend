// const express = require('express')
import express from 'express'

const app = express();

app.get('/',(req, res) => {
  res.send('Server is ready');
});

//get a list of jokes

app.get('/jokes', (req, res)=>{
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is A Joke"
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is Another Joke"
    },
    {
      id: 3,
      title: "Third joke",
      content: "This is Joke caleld Third Joke"
    },
    {
      id: 4,
      title: "Fourth joke",
      content: "This is called Fourth Joke"
    },
    {
      id: 5,
      title: "Fifth joke",
      content: "This is Fifth Joke"
    },
    {
      id: 6,
      title: "Sixth joke",
      content: "This is Last & Sixth Joke"
    },
  ];
  res.send(jokes);
})

const port = process.env.PORT || 5000 ;

app.listen(port ,() => {
  console.log(`Sever at http://localhost:${port}`)
})