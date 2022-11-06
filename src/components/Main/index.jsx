import React from "react";
import "./style.css";
import Api from "../../api";
import "regenerator-runtime/runtime";

export default ({text, find, setAddModalState}) => {
    let data = ["Альбатрос", "Барсук", "Ворон", "Гвоздодёр", "Ехидна"]
    
    let arr = data.filter(animal => {
        if (animal.toLowerCase().search(text.toLowerCase()) !== -1)
        return animal
    });

    return <main>
        <h1>Животные</h1>

        <div className="top_animal_panel">
            <input type="search" className="search__inp" value={text} placeholder="Найти" onChange={e => find(e.target.value)}/>
            <div className="buttons">
                <button className="add" onClick={setAddModalState}>Добавить</button>
                <button className="update" onClick={setAddModalState}>Изменить</button>
                <button className="delete" onClick={setAddModalState}>Удалить</button>
            </div>
        </div>
        {text && <div>Поиск: {text}</div>}
        <ul>
            {text ? arr.map(a => <li key={a}>{a}</li>) : data.map(a => <li key={a}>{a}</li>)}
        </ul>
    </main>
}