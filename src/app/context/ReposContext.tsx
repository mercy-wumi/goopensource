'use client'

import React, { createContext, useReducer } from "react";
import { Props, RepoType } from "@/app/@types/global";
import { Action, repoReducer } from "@/app/reducer/repoReducer";

const initialState = {
    openModal: false
}

export const ReposContext = createContext<{
    state: RepoType
    dispatch: React.Dispatch<Action>
}>({
    state: initialState,
    dispatch: () => {}
})

const ReposContextProvider: React.FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(repoReducer, initialState)

    return(
        <ReposContext.Provider value={{state, dispatch}}>
            {children}
        </ReposContext.Provider>
    )
     
}

export default  ReposContextProvider