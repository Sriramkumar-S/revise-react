import React from 'react'

function Heros(props) {
    if (props.heroName === 'Thanos') {
        throw new Error(props.heroName + ' is not an Hero')
    } else {
        return (
            <div>
                <h2>{props.heroName}</h2>
            </div>
        )
    }
}

export default Heros
