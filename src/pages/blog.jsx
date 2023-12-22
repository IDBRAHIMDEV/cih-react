import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Blog = () => {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    const addPost = () => {
        setPosts([title, ...posts])
        setTitle('')
    }

    const editPost = (title) => {
        setTitle(title)
    }

    const deletePost = post => {

        // if(window.confirm('Are you sure to delete this post: ' + post)) {
        //     let newPosts = posts.filter(currentPost => currentPost !== post)
        //     setPosts(newPosts)
        // }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't delete this post: "+post,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {

                let newPosts = posts.filter(currentPost => currentPost !== post)
                setPosts(newPosts)

              Swal.fire({
                title: "Deleted!",
                text: "this post "+ post +" has been deleted.",
                icon: "success",
                timer: 3000,
                timerProgressBar: true
              });
            }
          });

       
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
                        <button onClick={() => editPost(post) } className="btn btn-warning btn-sm me-2">Edit</button>
                        <button onClick={() => deletePost(post) } className="btn btn-danger btn-sm">Delete</button>
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