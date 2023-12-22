import React, { useState, useEffect } from 'react'

const Category = () => {

    const [categories, setCategories] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const getAllCategories = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(err => console.log(err))
    }


    const categoriesNotExist = () => {
        return <p>Not category yet!</p>
    }

    const showAllCategories = () => {
        return (
            <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>id</th>
                    <th>label</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

                { categories.map(category => (
                    <tr key={category.id}>
                        <td>{category.id}</td>
                        <td>{category.title}</td>
                        <td className="text-end">
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr> 
                )) }

                
                
            </tbody>
            </table>
        )
    }

    const toggleForm = () => {
        setShowForm(!showForm)
    }

    const addForm = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, description})
        })
        .then(res => res.json())
        .then(data => setCategories([data, ...categories]))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        getAllCategories()
    }, [])

  return (
    <>
        <div className="row my-4">
            <div className="col-6">

                


                <h1>List of categories</h1>
            </div>
            <div className="col-6 text-end">
                <button onClick={toggleForm} className="btn btn-primary">New</button>
            </div>
        </div>
       
        { showForm && (
            <div className="row my-4">
                <div className="col-4 mx-auto">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input value={title} onChange={ (e) => setTitle(e.target.value)} type="text" name="" id="title" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="description">Description</label>
                        <textarea value={description} onChange={ (e) => setDescription(e.target.value)} name="" id="description" rows="4" className="form-control"></textarea>
                    </div>
                   
                    <div className="d-grid mt-3">
                        <button onClick={addForm} className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        ) }

        <div className="row my-4">

            { categories.length > 0 ? showAllCategories() : categoriesNotExist()}
           
        </div>
    </>
  )
}

export default Category