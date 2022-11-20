import React, {useContext} from "react";
import {Ctx} from "../../App";
import "./style.css";
import Card from "../Card";
import "regenerator-runtime/runtime";
import {Link} from "react-router-dom";

export default ({setAddModalState}) => {

    const {animals, searchText} = useContext(Ctx);

    let arr = animals.filter(animal => {
        if (typeof animal.type !== "undefined") {
            if (animal.type.toLowerCase().search(searchText.toLowerCase()) !== -1)
            return animal
        }
    });

    // добавить кнопки для фильтрации

    return <main>
        <h1>Животные</h1>

        <div className="top_animal_panel">
            <input type="search" className="search__inp" value={searchText} placeholder="Найти" onChange={e => find(e.target.value)}/>
            <div className="buttons">
                <button className="add" onClick={setAddModalState}>Добавить</button>
                <button className="update" onClick={setAddModalState}>Изменить</button>
                <button className="delete" onClick={setAddModalState}>Удалить</button>
            </div>
        </div>
        {searchText && <div>Поиск: {searchText}</div>}
        <ul className="cards">
            {searchText ? arr.map(a =>
                    <Card key={a["_id"]} animal={a}/>
                 ) 
                 : animals.map(a => 
                    <Card key={a["_id"]} animal={a}/>
            )}
        </ul>
    </main>
}