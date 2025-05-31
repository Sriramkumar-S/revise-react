import React from "react";

const Functional = (props) => {

    return (
        <>
            {/* <h1>This is from a Functional Component</h1> */}
            <h3>Hii {props.name} a.k.a {props.heroName}</h3>
            {props.children}
        </>
    )
}

export default Functional;