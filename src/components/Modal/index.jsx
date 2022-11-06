import React, {useState} from "react";
import "./style.css";
import cross from "bootstrap-icons/icons/x.svg";
import Api from "../../api.js";

export default ({setState, state}) => {
    const [type, setType] = useState("");
    const [long, setLong] = useState("");
    const [lat, setLat] = useState("");

    const stateHandler = () => {
        setState(!state);
    }

    const style = {
        display: state ? "flex" : "none"
    }
    
    const handler = (e) => {
        e.preventDefault();
        
        const body = {
            "type": type,
            "habitat": [lat, long]
        }

        const result = Api.addAnimal(body);
        alert(JSON.stringify(result));

        // changeList(prev => {
        //     if (animal.length > 0)
        //         if (prev.includes(animal))
        //             return prev
        //         else
        //             return [...prev, animal].sort();
        //     else 
        //         return prev
        // })

        setType("");
        setLat("");
        setLong("");
        setState(false);
    }

    return <div className="modal_wrapper" style={style}>
        <div className="modal">
            <div className="modal__close" onClick={stateHandler}><img src={cross} alt="modal close btn"/></div>
            <div className="modal__content">
                <h3>Добавить редкое животное</h3>

                <form onSubmit={handler}>
                    <input type="text" placeholder="Название вида" name="type" value={type} onChange={e => setType(e.target.value)}/>
                    <input type="text" placeholder="Описание" name="description"/>
                    <input type="text" placeholder="Ссылка на фотографию" name="image"/>
                    <input type="number" placeholder="Средний вес" name="average_weight"/>
                    <input type="number" placeholder="Средний рост" name="average_height"/>
                    <input type="number" placeholder="Продолжительность жизни" name="lifespan"/>
                    <input type="number" placeholder="Популяция" name="population"/>
                    <input type="text" placeholder="Статус" name="status"/>
                    <label>Ареал обитания</label>
                    <input type="text" placeholder="Широта" name="habitat_lat" value={lat} onChange={e => setLat(e.target.value)}/>
                    <input type="text" placeholder="Долгота" name="habitat_long" value={long} onChange={e => setLong(e.target.value)}/>
                    
                    <button type="submit">Добавить</button>
                </form>

            </div>
        </div>
    </div>
}