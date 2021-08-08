// import React, {  createContex, useContext, useReducer} from "react";

// //prepares the datalayer
// export const StateContext = createContex()

// //wrap our app and provide the Data layer
// export const StateProvider = ({ reducer, initialState, children }) => (
//   <StateContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </StateContext.Provider>
// )

// //pull information from the data layer
// export const useStateValue = () => useContext(StateContext)




// setup data layer
// we need this to track the basket
import React, { createContext, useContext, useReducer } from "react";
//This is the data layer
export const StateContext = createContext()
//Build a provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext)