import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Article from '../components/Article'

const Blog = () => {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)
  const [blogData, setBlogData] = useState([])

  const getData = () => {
    axios
    .get('http://localhost:3004/articles')
    .then((res) => setBlogData(res.data))
  }

  useEffect(() => getData(), []);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (content.length < 140) {
      setErrorMessage(true)
    } else {
      axios.post('http://localhost:3004/articles', {
        author,
        content,
        date: Date.now(),
      })
      setErrorMessage(false);
      setAuthor("")
      setContent("")
      getData()
      
    }
  }

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          style={{
            border: errorMessage ? '1px solid red' : '1px solid #61dafb',
          }}
          placeholder="Message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {errorMessage && (
          <ul style={{ color: 'red' }}>
            Veuillez écrire un minimun de 140 caractères
          </ul>
        )}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {blogData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </ul>
    </div>
  )
}

export default Blog
