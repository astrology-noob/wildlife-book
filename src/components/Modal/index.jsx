import React, {useState} from "react";
import cross from "bootstrap-icons/icons/x.svg";
import Api from "../../api.js";

export default ({setState, state}) => {
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [lifespan, setLifespan] = useState("");
    const [population, setPopulation] = useState("");
    const [status, setStatus] = useState("Неопределенные по статусу");
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
            "description":desc,
            "image": img,
            "average_weight": weight,
            "average_height": height,
            "lifespan": lifespan,
            "population": population,
            "status": status,
            "habitat": [lat, long]
        }

        const result = Api.addAnimal(body);

        setType("");
        setDesc("");
        setImg("");
        setWeight("");
        setHeight("");
        setLifespan("");
        setPopulation("");
        setStatus("Неопределенные по статусу");
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
                    <input type="text" placeholder="Описание" name="description" value={desc} onChange={e => setDesc(e.target.value)}/>
                    <input type="text" placeholder="Ссылка на фотографию" name="image" value={img} onChange={e => setImg(e.target.value)}/>
                    <input type="number" placeholder="Средний вес" name="average_weight" value={weight} onChange={e => setWeight(e.target.value)}/>
                    <input type="number" placeholder="Средний рост" name="average_height" value={height} onChange={e => setHeight(e.target.value)}/>
                    <input type="number" placeholder="Продолжительность жизни" name="lifespan" value={lifespan} onChange={e => setLifespan(e.target.value)}/>
                    <input type="number" placeholder="Популяция" name="population" value={population} onChange={e => setPopulation(e.target.value)}/>
                    <select name="status" value={status} onChange={e => setStatus(e.target.options[e.target.selectedIndex].text)}>
                        <option value="Неопределенные по статусу">Неопределенные по статусу</option>
                        <option value="Вероятно исчезнувшие">Вероятно исчезнувшие</option>
                        <option value="Находящиеся под угрозой исчезновения">Находящиеся под угрозой исчезновения</option>
                        <option value="Сокращающиеся в численности">Сокращающиеся в численности</option>
                        <option value="Редкие">Редкие</option>
                        <option value="Восстанавливаемые и восстанавливающиеся">Восстанавливаемые и восстанавливающиеся</option>
                    </select>
                    <label>Ареал обитания</label>
                    <input type="text" placeholder="Широта" name="habitat_lat" value={lat} onChange={e => setLat(e.target.value)}/>
                    <input type="text" placeholder="Долгота" name="habitat_long" value={long} onChange={e => setLong(e.target.value)}/>
                    
                    <button type="submit">Добавить</button>
                </form>

            </div>
        </div>
    </div>
}