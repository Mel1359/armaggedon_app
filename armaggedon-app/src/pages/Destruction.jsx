import {Header} from "../components/header/Header";
import {AsteroidsContext} from "../components/asteroids-context/AsteroidsContext";
import {useContext} from "react";
import {AsteroidCard} from "../components/AsteroidCard/AsteroidCard";
import {Bottom} from "../components/Bottom/Bottom";

export const Destruction = () => {
    const {destroyment} = useContext(AsteroidsContext);

    return (
        <div>
            <Header/>
            <div>
                {destroyment.map((item) => (
                    <AsteroidCard key={item.id} {...item} />
                ))}
            </div>
            <Bottom/>
        </div>
    );
};
