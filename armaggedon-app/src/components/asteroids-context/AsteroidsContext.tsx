import React, {createContext, FC, ReactNode, useState} from 'react';

export const AsteroidsContext = createContext(null);

type AsteroidsContextType = {
    onlyDangerous: boolean;
    setOnlyDangerous: (value: boolean) => void;
    distanceMode: boolean;
    setDistanceMode: (value: boolean) => void;
};

type AsteroidsContextProviderProps = {
    children?: ReactNode
}

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({children})=>{

    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [distanceMode, setDistanceMode] = useState(true);

    return <AsteroidsContext.Provider
        value={{ onlyDangerous, setOnlyDangerous, distanceMode, setDistanceMode }}>
        {children}
    </AsteroidsContext.Provider>
}