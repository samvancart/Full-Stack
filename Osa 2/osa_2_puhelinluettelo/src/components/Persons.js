import React from 'react'
import Person from './Person'

const Persons = (props) => {
    return (
        props.persons.map(person =>
            <ul key={person.id}>
                <Person name={person.name} number={person.number} deletePerson={() => props.deletePerson(person.id)} />
            </ul>
        )
    )
}
export default Persons