import React, {useState, useContext} from "react";
import cross from "bootstrap-icons/icons/x.svg";
import Api from "../../api.js";
import {Ctx} from "../../App";

export default () => {
    const {animModalState, setAnimModalState, animals, animal, setAnimal, statuses} = useContext(Ctx);

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

    const style = {
        display: animModalState != "" ? "flex" : "none"
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
        
        if (animModalState == "add"){
            if (body.type) {
                const result = Api.addAnimal(body);
                result.then(res => {
                    clear();
                })
            }
        }
        else if (animModalState == "update"){
            const result = Api.updateAnimal(animal._id, body);
            result.then(res => {
                clear();
            })
        }
    }

    const clear = () => {
        setType("");
        setDesc("");
        setImg("");
        setWeight("");
        setHeight("");
        setLifespan("");
        setPopulation("");
        setStatus(statuses[0]);
        setLat("");
        setLong("");
        setAnimModalState("");
    }

    return <div className="modal_wrapper" style={style}>
        <div className="modal">
            <div className="modal__close" onClick={clear}><img src={cross} alt="modal close btn"/></div>
            <div className="modal__content">
            {animModalState == "add" ? <h3>Добавить редкое животное</h3> : <h3>Изменить редкое животное</h3> }

                <form onSubmit={handler}>
                    {animModalState == "add" ?
                    <input type="text" placeholder="Название вида" name="type" value={type} onChange={e => setType(e.target.value)}/>
                    :
                    <select name="type" value={type} onChange={e => {
                        setType(e.target.options[e.target.selectedIndex].text);
                        let newAnimal = animals.find(anim => anim.type == e.target.options[e.target.selectedIndex].text);
                        setAnimal(newAnimal);
                        
                        setDesc(newAnimal.description ? newAnimal.description : "");
                        setImg(newAnimal.image ? newAnimal.image : "");
                        setWeight(newAnimal.average_weight ? newAnimal.average_weight : "");
                        setHeight(newAnimal.average_height ? newAnimal.average_height : "");
                        setLifespan(newAnimal.lifespan ? newAnimal.lifespan : "");
                        setPopulation(newAnimal.population ? newAnimal.population : "");
                        setStatus(newAnimal.status ? newAnimal.status : statuses[0]);
                        setLat(newAnimal.habitat[0] ? newAnimal.habitat[0] : "");
                        setLong(newAnimal.habitat[1] ? newAnimal.habitat[1] : "");
                    }}>
                        {animals.map(anim => <option key={anim._id}>{anim.type}</option>)}
                    </select>
                    }
                    
                    <input type="text" placeholder="Описание" name="description" value={desc} onChange={e => setDesc(e.target.value)}/>
                    <input type="text" placeholder="Ссылка на фотографию" name="image" value={img} onChange={e => setImg(e.target.value)}/>
                    <input type="number" placeholder="Средний вес" name="average_weight" value={weight} onChange={e => setWeight(e.target.value)}/>
                    <input type="number" placeholder="Средний рост" name="average_height" value={height} onChange={e => setHeight(e.target.value)}/>
                    <input type="number" placeholder="Продолжительность жизни" name="lifespan" value={lifespan} onChange={e => setLifespan(e.target.value)}/>
                    <input type="number" placeholder="Популяция" name="population" value={population} onChange={e => setPopulation(e.target.value)}/>
                    <select name="status" value={status} onChange={e => setStatus(e.target.options[e.target.selectedIndex].text)}>
                        <option value={statuses[0]}>{statuses[0]}</option>
                        <option value={statuses[1]}>{statuses[1]}</option>
                        <option value={statuses[2]}>{statuses[2]}</option>
                        <option value={statuses[3]}>{statuses[3]}</option>
                        <option value={statuses[4]}>{statuses[4]}</option>
                        <option value={statuses[5]}>{statuses[5]}</option>
                    </select>
                    <label>Ареал обитания</label>
                    <input type="text" placeholder="Широта" name="habitat_lat" value={lat} onChange={e => setLat(e.target.value)}/>
                    <input type="text" placeholder="Долгота" name="habitat_long" value={long} onChange={e => setLong(e.target.value)}/>
                    
                    {animModalState == "add" && <button type="submit">Добавить</button>}
                    {animModalState == "update" && <button type="submit">Обновить</button>}
                    
                </form>

            </div>
        </div>
    </div>
}