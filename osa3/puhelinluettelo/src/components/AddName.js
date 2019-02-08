import React from 'react'
import services from '../services/persons'

const AddName = ({ name, sname, number, snumber, persons, spersons, nameHandler, numberHandler }) => {

    const addName = (event) => {
        event.preventDefault()

        var listassa = false

        persons.forEach(function (name1) {
            if (name === name1.name) {
                listassa = true;
            }
        });

        if (listassa) {
            window.alert(`${name} on jo listassa`)
            sname('')
            snumber('')
        } else {
            newPerson(event)
        }
    }

    const newPerson = (event) => {
        event.preventDefault()
        const newName = {
            name: name,
            number: number
        }

        services
            .create(newName).then(returnedPerson => {
                spersons(persons.concat(returnedPerson))
                sname('')
                snumber('')
            })
    }


    return (
        <div>
            <h2>Lisää uusi</h2>
            <form onSubmit={addName}>
                <div>
                    Nimi: <input value={name} onChange={nameHandler} />
                    <p />
                    Numero: <input value={number} onChange={numberHandler} />

                    <div>
                        <button type="submit">lisää</button>
                    </div>

                </div>
            </form>
        </div>

    )

}

export default AddName