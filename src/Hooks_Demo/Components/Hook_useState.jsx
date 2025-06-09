import React, { useState } from 'react'

function Hook_useState() {

    const initialCountValue = 0;
    const initialNameValue = {
        firstName: '',
        lastName: ''
    }
    const initialItemValue = [];

    const [count, setCount] = useState(initialCountValue);
    const [name, setName] = useState(initialNameValue);
    const [items, setItems] = useState(initialItemValue)

    const nameChangeHandler = (event) => {
        setName({
            ...name,
            [event.target.name]: event.target.value
        })
    }
    const addNameHandler = () => {
        let {firstName, lastName} = name;
        setItems([
            ...items,
            {
                firstName: firstName,
                lastName: lastName,
                id: Math.floor(Math.random() * 10),
                sNo: items.length+1
            }
        ])
        setName(initialNameValue)
    }
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(initialCountValue)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increament</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decreament</button>
      <hr />
      <input type="text" name='firstName' value={name.firstName} onChange={nameChangeHandler}/>
      <input type="text" name='lastName' value={name.lastName} onChange={(e) => nameChangeHandler(e)}/>
      <h3>FirstName is {name.firstName}</h3>
      <h3>LastName is {name.lastName}</h3>
      <hr />
      <button onClick={addNameHandler}>Add name to list</button>
      <ul>
        {items.map(item => (
            <li key={item.id}>{item.sNo}. {item.firstName} {item.lastName}</li>
        ))}
      </ul>
    </div>
  )
}

export default Hook_useState
