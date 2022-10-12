import axios from 'axios'
import React, { useState } from 'react'

const Article = ({ article }) => {
  const [editing, setEditing] = useState(false)
  const [editContent, setEditContent] = useState('')

  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })
    return newDate
  }

  const handleEdit = () => {
    const data = {
      author: article.author,
      content: editContent,
      date: Date.now()
    }
    axios.put('http://localhost:3004/articles/' + article.id, data).then(() =>{
      setEditing(true)

    })
  }




  return (
    <div className="article">
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le: {dateFormater(article.date)}</em>
      </div>
      {editing ? (
        <textarea
          defaultValue={editContent ? editContent : article.content}
          onChange={(e) => setEditContent(e.target.value)}
        ></textarea>
      ) : (
        <p>{editContent ? editContent : article.content}</p>
      )}
      <div className="btn-container">
        {editing ? (
          <button onClick={() => handleEdit()}>Valider</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}
        <button>Supprimer</button>
      </div>
    </div>
  )
}

export default Article
