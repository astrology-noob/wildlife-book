import React, {useState} from "react";
import "./style.css";
import cross from "bootstrap-icons/icons/x.svg";

export default ({displayHandler, setView, setUser}) => {

    const register = (e) => {
        e.preventDefault();
        let user = e.target.username.value;
        localStorage.setItem("user", user);
        setUser(user);
        displayHandler();
    }

    return <>
        <h2>Зарегистрироваться</h2>
        <form onSubmit={register}>
            <input type="text" name="username" placeholder="Название"/>
            <input type="submit" value="Зарегистрироваться"/>
        </form>
        <button onClick={setView}>Войти</button>
    </> 
}