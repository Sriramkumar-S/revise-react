import React, { useState } from 'react'

const initialState = {
    fName: 'Tony',
    lName: 'Stark'
}

const ObjectImmutability = () => {
    const [fullName, setFullName] = useState(initialState);

    const handleNameChange = () => {
        // fullName.fName = 'Iron';
        // fullName.lName = 'Man';
        // setFullName(fullName)

        const newFullName = {...fullName};
        newFullName.fName = 'Iron';
        newFullName.lName = 'Man';
        setFullName(newFullName);
    }

    console.log('Object state rendered')
    return (
        <div>
            <button onClick={handleNameChange}>{fullName.fName} {fullName.lName}</button>
        </div>
    )
}

export default ObjectImmutability
