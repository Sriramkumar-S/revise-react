import React from "react";

const Functional = ({name, heroName}) => {

    // const { name, heroName } = props;
    return (
        <>
            {/* <h1>This is from a Functional Component</h1> */}
            {/* <h3>Hii {props.name} a.k.a {props.heroName}</h3> */}
            <h3>Hii {name} a.k.a {heroName}</h3>
            {/* {props.children} */}
        </>
    )
}

export default Functional;