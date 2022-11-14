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
        {typeof animal.description !== 'undefined' && (
            <h3>{animal.description}</h3> 
        )}
        {typeof animal.image !== 'undefined' && (
            <div style={style}></div>
        )}
    </main>
}