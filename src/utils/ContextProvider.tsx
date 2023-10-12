import React, {createContext, useState} from 'react'

export const Context = createContext(null);

type Props= {  
    children: React.ReactNode
}

const ContextProvider:React.FC<Props> = (props) => {
    const check=()=>{
        const user = localStorage.getItem();
    }
    const [user, setUser]= useState(check());
    return (
        <Context.Provider>
            {props.children}
        </Context.Provider>
    )
        
}

export default ContextProvider