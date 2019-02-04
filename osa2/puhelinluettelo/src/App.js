import React, { useState } from 'react'
import Persons from './components/Persons'
import AddName from './components/AddName'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newCondition, setNewCondition] = useState('')

    const personsToShow = newCondition.length === 0
        ? persons : persons.filter(person => person.name.includes(newCondition))



    const HandleNewName = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const HandleNewNumber = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const HandleNewCondition = (event) => {
        setNewCondition(event.target.value)
    }

    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <p>Rajaa näytettäviä</p>
            <form>
                <input value={newCondition} onChange={HandleNewCondition} />
            </form>
            <AddName
                name={newName}
                sname={setNewName}
                number={newNumber}
                snumber={setNewNumber}
                persons={persons}
                spersons={setPersons}
                nameHandler={HandleNewName}
                numberHandler={HandleNewNumber}
            />
            <Persons persons={personsToShow} />
        </div>
    )
}

export default App