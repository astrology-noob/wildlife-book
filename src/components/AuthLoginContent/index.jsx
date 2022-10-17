import React, {useState} from "react";
import "./style.css";

export default ({displayHandler, setView, setUser}) => {

    const signIn = (e) => {
        e.preventDefault();
        let user = e.target.username.value;
        if (localStorage.getItem("user")) {
            setUser(user);
            displayHandler();
        }
    }

    return <>
        <h2>Войти</h2>
        <form onSubmit={signIn}>
            <input type="text" name="username" placeholder="Название"/>
            <input type="submit" value="Войти" />
        </form>
        <button onClick={setView}>Зарегистрироваться</button>
    </> 
}