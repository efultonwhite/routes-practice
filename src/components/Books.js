import React from 'react'

export default function Books(props) {

    

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.author}</p>
            <p>{props.description}</p>
        </div>
    )
}
