import {Header} from "../components/header/Header";
import {AsteroidsContext} from "../components/asteroids-context/AsteroidsContext";
import {useContext} from "react";
import {AsteroidCard} from "../components/AsteroidCard/AsteroidCard";

export const Destruction = ()=>{

    const {destroyment} = useContext(AsteroidsContext);

    return (
        <div>
            <Header/>
            <div style={{ marginTop: '-270px' }}>
                {destroyment.map((item) => (
                    <AsteroidCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};