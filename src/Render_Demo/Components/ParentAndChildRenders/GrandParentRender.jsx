import React, { useState } from 'react'
import ParentRender from './ParentRender';
import ChildRender from './ChildRender';

const GrandParentRender = () => {
    const [name, setName] = useState('Sriram');
    console.log('Grand parent rendered');
  return (
    <div>
      <button onClick={() => setName('SRK')}>Change name</button>
      <ParentRender name={name}>
        <ChildRender />
      </ParentRender>
    </div>
  )
}

export default GrandParentRender
