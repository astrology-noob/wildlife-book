import React, {useState} from "react";
import "./style.css";

export default ({data, sort}) => {
    let arr = data.filter(animal => {
        if (animal.toLowerCase().search(sort.toLowerCase()) !== -1)
        return animal
    });

    return <main>
        <h1>WildLife Book</h1>

        {sort && <div>Поиск: {sort}</div>}
        <ul>
            {sort ? arr.map(a => <li key={a}>{a}</li>) : data.map(a => <li key={a}>{a}</li>)}
        </ul>
    </main>
}