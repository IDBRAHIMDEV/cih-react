import React from 'react'

const Category = () => {

    const getAllCategories = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

  return (
    <>
        <div className="row my-4">
            <div className="col-6">

                <button onClick={getAllCategories} className="btn btn-light my-3">Get All</button>

                <h1>List of categories</h1>
            </div>
            <div className="col-6 text-end">
                <button className="btn btn-primary">New</button>
            </div>
        </div>

        <div className="row my-4">
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>label</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id 1</td>
                        <td>label number 1</td>
                        <td className="text-end"><button className="btn btn-warning">Edit</button><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Category