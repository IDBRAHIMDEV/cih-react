import React from 'react'

const Card = ({name, url, image}) => {

  return (
    <>
        <div class="card my-2">
            <img class="card-img-top" src={image} alt="Title" />
            <div class="card-body">
                <h4 class="card-title">{name}</h4>
                <p class="card-text">
                    <a href={url}>Read more...</a>
                </p>
            </div>
        </div>
        
    </>
  )
}

export default Card