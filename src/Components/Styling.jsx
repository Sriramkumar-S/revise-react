import React from 'react'
import '../Styles.css'
import style from '../Styles.module.css'
import ChildStyling from './ChildStyling'
function Styling() {
    return (
        <div>
            {/* Using stylesheet */}
            <h1 className='error'>Error</h1>
            <h1 className='success'>Success</h1>

            {/* using Inline styles */}
            <h1 style={{ color: 'darkred' }}>Error</h1>
            <h1 style={{ color: 'darkgreen', fontSize: '72px' }}>Success</h1>

            {/* using module.css  */}
            <h1 className={style.error}>Error</h1>
            <h1 className={style.success}>Success</h1>

            <ChildStyling status='success' />
        </div>
    )
}

export default Styling
