import React from 'react'
import { PersonList } from './personList'
import Person from './Person';

const ListRendering = () => {
    const persons = PersonList;
    const personList = persons.map((person) => (
            <Person key={person.id} person={person}/>
    ))
    return (
        <div>
            {personList}
        </div>
    )
}

export default ListRendering
