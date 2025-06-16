import React from 'react'

function UserDetail({ text, prop}) {
    console.log(`Rendering ${text}`)
  return (
    <>
      {text} - {prop}
    </>
  )
}

export default React.memo(UserDetail)
