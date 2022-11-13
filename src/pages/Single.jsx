import React, {useEffect, useState} from 'react';
import Api from "../api";
import {useParams} from 'react-router-dom';

export default ({animal}) => {
    const routerParams = useParams();
    // const name = routerParams["name"];
    
    const [data, setData] = useState(animal);

    return <main>
        <h1>{data.type}</h1>
        {typeof data.description !== 'undefined' && (
            <h3>{data.description}</h3> 
        )}
    </main>
}