import React from 'react'

const Row = ({name, description}) => {
    return (
        <>
            <div class="card" style = {{width:"200px"}}>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default Row