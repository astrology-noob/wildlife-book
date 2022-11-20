import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Ctx} from "../App";


export default () => {
    const {animal} = useContext(Ctx);

    const style = {
        backgroundImage: animal.image ? `url(${animal.image})` : "url(https://upload.wikimedia.org/wikipedia/ru/2/24/WWF_logo.svg)",
        width: "100px",
        height: "100px"
    }

    return <main>
        <h1>{animal.type}</h1>
        {typeof animal.description !== 'null' && (
            <h3>{animal.description}</h3> 
        )}
        {typeof animal.image !== 'null' && (
            <div style={style}></div>
        )}
        {typeof animal.average_height !== 'null' && (
            <div>{animal.average_height} см</div>
        )}
        {typeof animal.average_weight !== 'null' && (
            <div>{animal.average_weight} кг</div>
        )}
        {typeof animal.lifespan !== 'null' && (
            <div>{animal.lifespan} лет</div>
        )}
        {typeof animal.population !== 'null' && (
            <div>{animal.population} особей</div>
        )}
        {typeof animal.status !== 'null' && (
            <div>{animal.status}</div>
        )}
        {animal.habitat[0] != "" && (
            <div>{animal.habitat[0]}, {animal.habitat[1]}</div>
        )}
    </main>
}