import React from 'react'

const ChildFwdRef = React.forwardRef((props, ref) => {
    return (
      <div>
        <input type="text" ref={ref}/>
      </div>
    )
  })

export default ChildFwdRef
