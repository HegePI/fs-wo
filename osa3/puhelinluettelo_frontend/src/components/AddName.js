import React from 'react'
import services from '../services/persons'

const AddName = ({ name, sname, nro, snumber, persons, spersons, nameHandler, numberHandler }) => {

    const addName = (event) => {
        event.preventDefault()
        console.log('Moi1')

        var listassa = false

        persons.forEach(function (name1) {
            if (name === name1.name) {
                listassa = true;
            }
            console.log('moi2')
        });

        if (listassa) {
            window.alert(`${name} on jo listassa`)
            sname('')
            snumber('')
        } else {
            console.log('Moi3')
            newPerson(event)
        }
    }

    const newPerson = (event) => {
        event.preventDefault()
        const newName = {
            name: name,
            nro: nro
        }
        console.log('moi4')
        console.log(newName)

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
                    Numero: <input value={nro} onChange={numberHandler} />

                    <div>
                        <button type="submit">lisää</button>
                    </div>

                </div>
            </form>
        </div>

    )

}

export default AddName