import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import AddName from './components/AddName'
import services from './services/persons'


const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newCondition, setNewCondition] = useState('')

    useEffect(() => {
        console.log(services.getAll())
        services.getAll().then(persons => {
            setPersons(persons)
        })
    }, [])

    const personsToShow = newCondition.length === 0
        ? persons : persons.filter(person => person.name.includes(newCondition))

    const HandleNewName = (event) => {
        setNewName(event.target.value)
    }

    const HandleNewNumber = (event) => {
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
                nro={newNumber}
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