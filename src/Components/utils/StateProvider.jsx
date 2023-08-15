import { createContext,useContext,useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({childrean,initialState,reducer})=>{
    <StateContext.Provider value={useReducer(reducer,initialState)}>
       {childrean}
    </StateContext.Provider> 
}