import React from 'react'

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <form>
        <input type="text"  placeholder='Name'/>
        <textarea placeholder='Message'></textarea>
        <input type="submit" value="Envoyer" />
      </form>
      <ul></ul>
    </div>
  )
}

export default Blog
