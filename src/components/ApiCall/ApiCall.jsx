import React from 'react'
import { useEffect, useState } from 'react'

export default function ApiCall() {
 const [posts, setPosts] = useState([])
  
  const getPosts = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await response.json()
    setPosts(data)
    console.log(data)
  }

  useEffect(() => {getPosts()}, [])

  return (
    <>
    <h1>Hey</h1>
    <p>{posts.value}</p>
    <button onClick={getPosts}>Get new Joke</button>
    </>
  )
}
