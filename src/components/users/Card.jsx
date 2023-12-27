import React from 'react'

const Card = ({name, url, image, onDelete}) => {

  return (
    <>
        <div class="card my-2">
            <img class="card-img-top" src={image} alt="Title" />
            <div class="card-body">
                <h4 class="card-title">{name}</h4>
                <p class="card-text">
                    <a href={url}>Read more...</a>
                    <div className="my-3 text-end">
                        <button onClick={() => onDelete(name) } className="btn btn-sm btn-danger">Delete</button>
                    </div>
                </p>
            </div>
        </div>
        
    </>
  )
}

export default Card