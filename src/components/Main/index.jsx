import React, {useContext} from "react";
import {Ctx} from '../../App';
import "./style.css";
import Api from "../../api";
import "regenerator-runtime/runtime";
import {Link} from 'react-router-dom';

export default ({setAddModalState, setAnimal}) => {
    // let data = ["Альбатрос", "Барсук", "Ворон", "Гвоздодёр", "Ехидна"]
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     Api.getAll().then(data => setData(data))
    // }, []);


    const {animals, searchText} = useContext(Ctx);

    let arr = animals.filter(animal => {
        if (typeof animal.type !== 'undefined') {
            if (animal.type.toLowerCase().search(searchText.toLowerCase()) !== -1)
            return animal
        }
    });

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
        <ul>
            {searchText ? arr.map(a =>
                <Link to={`/animals/${a.type}`} key={a["_id"]} onClick={setAnimal(a)}>
                    <li key={a["_id"]}>{a.type}</li>
                </Link>
                 ) 
                 : animals.map(a => 
                <Link to={`/animals/${a.type}`} key={a["_id"]} onClick={setAnimal(a)}>
                    <li key={a["_id"]}>{a.type}</li>
                </Link>
            )}
        </ul>
    </main>
}