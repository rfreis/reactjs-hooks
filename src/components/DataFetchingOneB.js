import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOneB() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      setLoading(false)
      setPost(response.data)
      setError('')
    })
    .catch(error => {
      setLoading(false)
      setPost({})
      setError('Something went wront!')
    })
  }, [])

  return (
    <div>
    { loading ? 'loading' : post.title }
    { error ? error : null }
    </div>
  )
}

export default DataFetchingOneB
