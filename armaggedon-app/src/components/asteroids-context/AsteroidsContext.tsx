import {createContext, FC, ReactNode, useState} from 'react';

export const AsteroidsContext = createContext(null);

type AsteroidsContextProviderProps = {
    children?: ReactNode
}

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({children})=>{

    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [distanceMode, setDistanceMode] = useState(true);
    const [destroyment, setDestroyment] = useState([]);

    const addAsteroid = (asteroid)=>{
        setDestroyment([...destroyment.filter(item=>item.id !== asteroid.id), asteroid]);
    }

    const deleteAsteroid = (asteroid)=>{
        setDestroyment([...destroyment.filter(item=>item.id !== asteroid.id)]);
    }

    return <AsteroidsContext.Provider
        value={{
            onlyDangerous,
            setOnlyDangerous,
            distanceMode,
            setDistanceMode,
            addAsteroid,
            deleteAsteroid,
            destroyment,
    }}>
        {children}
    </AsteroidsContext.Provider>
}