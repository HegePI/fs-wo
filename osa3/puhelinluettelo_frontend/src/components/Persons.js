import React from 'react'
import Person from './Person'

const Persons = (persons) => {
    const data = persons.persons.map(person =>
        <Person name={person.name} nro={person.nro} key={person.name} />
    )

    return (
        <div>
            <h2>Numerot</h2>
            {data}
        </div>
    )


}

export default Persons