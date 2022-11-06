import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export default () => {
    const [data, setData] = useState([]);
    const link = "https://fakerapi.it/api/v1/custom?_quantity=20&name=pokemon&cnt=number";

    useEffect(() => {
        fetch(link)
            .then(res => res.json())
            .then(d => setData(d.data));
    }, []);

    return <main>
        <h1>Покемоны</h1>
        <div className="container">
            {data.map((elem, i) => 
                <Link to={`/data/${elem.name}`} className="card" key={i}>
                    {elem.name}
                </Link>
            )}
        </div>
    </main>
}