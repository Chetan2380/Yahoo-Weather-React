import { createContext, useReducer } from "react";

function reducer(state,action){
    switch(action.type){
        case "SEARCH":
            return {...state, city: action.payload}
        default:
            return state
    }
}

const initialstate={city: null}

export const CityContext=createContext()

function MyCityContextProvider({children}){
    const[state,dispatch]=useReducer(reducer, initialstate)

    return(
        <CityContext.Provider value={{state,dispatch}}>
            {children}
        </CityContext.Provider>
    );
}

export default MyCityContextProvider;