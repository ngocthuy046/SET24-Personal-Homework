import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

const ContextProvider = ({ children }) => {
    const [counterA, setCounterA] = useState(0);
    
    return (
        <CounterContext.Provider value={{ counterA, setCounterA }}>
            {children}
        </CounterContext.Provider>
    );
}

export default ContextProvider