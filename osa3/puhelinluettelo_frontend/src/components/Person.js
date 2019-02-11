import React from 'react'

const Person = ({ name, nro }) => {

    return (
        <div>
            <p key={name}>{name}: {nro}</p>
        </div>
    )

}

export default Person