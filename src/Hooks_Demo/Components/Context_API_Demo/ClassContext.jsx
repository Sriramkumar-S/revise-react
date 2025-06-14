import React, { createContext } from 'react'
import ComponentA from './ComponentA'


// export const UserContext = React.createContext();
// export const SportsContext = React.createContext();


{/* useContext Hook syntax */}
export const UserContext = createContext('');
export const SportsContext = createContext('');

function ClassContext() {

    return (
        <div>
            {/* Context API in class components */}
            {/* <UserContext.Provider value='Sriram'>
                <SportsContext.Provider value='Badminton'>
                    <ComponentA />
                </SportsContext.Provider>
            </UserContext.Provider> */}

            {/* useContext Hook syntax */}
            <UserContext value='Sriram'>
                <SportsContext value='Badminton'>
                    <ComponentA />
                </SportsContext>
            </UserContext>
        </div>
    )
}

export default ClassContext
// export { UserContext }