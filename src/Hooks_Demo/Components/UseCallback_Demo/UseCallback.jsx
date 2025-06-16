import React, { useCallback, useState } from 'react'
import Title from './Title'
import UserDetail from './UserDetail'
import Button from './Button'

function UseCallback() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(prevAge => prevAge + 1);
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(prevSalary => prevSalary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <UserDetail text='Age' prop={age} />
            <Button handleIncrement={incrementAge}>Increment button - Age</Button>
            <UserDetail text='Salary' prop={salary} />
            <Button handleIncrement={incrementSalary}>Increment button - Salary</Button>
        </div>
    )
}

export default UseCallback
