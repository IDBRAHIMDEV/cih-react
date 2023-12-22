import React, { useState, useEffect } from 'react'

const Category = () => {

    const [categories, setCategories] = useState([])

    const getAllCategories = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setCategories([]))
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
                <button className="btn btn-primary">New</button>
            </div>
        </div>

        <div className="row my-4">
            
            { categories.length > 0 ? showAllCategories() : categoriesNotExist()}
           
        </div>
    </>
  )
}

export default Category