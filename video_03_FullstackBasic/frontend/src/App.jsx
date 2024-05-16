import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] =  useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
      .then((resp)=>{
        setJokes(resp.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  },[])

  return (
    <>
      <div>
        <h1> Chai aur Backend Series </h1>

        <p> JOKES : {jokes.length}</p>

        {
          jokes.map((joke) => (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <h5>{joke.content}</h5>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
