import { createContext, useReducer } from "react";
import { DUMMY } from "../dummy";

export const DataContext = createContext({items: DUMMY,add: ()=> {},})

function dataReducer (state,action){
    if(action.type === 'TOGGLE_LIKE'){
         const updatedItems = state.map((item) => item.id === action.payload ? {...item,like: !item.like} : item )

      return updatedItems;
      
    }
    
    return state;
}

export default function DataContextProvider ({children}){
    const [dataState, dispatchDataState] = useReducer(dataReducer,DUMMY)

   function handleLike(id){
    dispatchDataState({type: 'TOGGLE_LIKE',payload: id})
   }
 

   const ctxValue = {items: dataState, add: handleLike,}
   return <DataContext.Provider value={ctxValue}>{children}</DataContext.Provider>
}

