import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default () => {
    const routerParams = useParams();
    const name = routerParams["name"];
    
    return <main>
        <h1>{name}</h1>
    </main>
}