import React, {useState} from "react";
import "./style.css";
import cross from "bootstrap-icons/icons/x.svg";

export default ({changeList, setState, state}) => {
    const [animal, setAnimal] = useState("");

    const stateHandler = () => {
        setState(!state);
    }

    const style = {
        display: state ? "flex" : "none"
    }
    
    const handler = (e) => {
        e.preventDefault();
        changeList(prev => {
            if (prev.includes(animal))
                return prev
            else
                return [...prev, animal].sort();
        })

        setAnimal("");
    }

    return <div className="modal_wrapper" style={style}>
        <div className="modal">
            <div className="modal__close" onClick={stateHandler}><img src={cross} alt="modal close btn"/></div>
            <div className="modal__content">
                <h2>Добавить редкое животное</h2>
                <form onSubmit={handler}>
                    <input type="text" placeholder="Название" onChange={e => setAnimal(e.target.value)}/>
                    <button type="submit">Добавить</button>
                </form>
            </div>
        </div>
    </div>
}