import React, { useState } from 'react'

const Blog = () => {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    const addPost = () => {
        setPosts([title, ...posts])
        setTitle('')
    }

  return (
    <>
    <div className="row my-5">
        <div className="col-4 mx-auto">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input value={title} onChange={ (e) => setTitle(e.target.value)  } placeholder='Please tape the Title here...' id='title' type="text" className="form-control" />
            </div>
            <div className="d-grid">
                <button onClick={addPost} className="btn btn-success">Add</button>
            </div>
            <ul className="list-group my-3">
                { posts.map((post, index) => (<li key={index} className="list-group-item">
                    
                    {post}
                    <div className="text-end">
                        <button className="btn btn-warning btn-sm me-2">Edit</button>
                        <button onClick={() => window.confirm('Are you sure to delete this item ?')} className="btn btn-danger btn-sm">Delete</button>
                    </div>
                </li>)) }
            </ul>
        </div>
    </div>
        <h3>Blog</h3>
    </>
  )
}

export default Blog