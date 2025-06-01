import React from 'react'

function ChildStyling(props) {
    return (
        <div>
            {/* CHanging className dynamically using props */}
            <h2 className={props.status == 'error' ? 'error' : 'success'}>Status - {props.status}</h2>

            {/* Using stylesheet */}
            <h2 className='error'>Using parent's className mentioned in stylesheet inherited to child</h2>
            
            {/* using module.css  */}
            {/* <h2 className={style.error}>Using parent's style mentioned in module.css file. This will through error</h2> */}
        </div>
    )
}

export default ChildStyling
