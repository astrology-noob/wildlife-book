import React, {useState} from "react";
import "./style.css";
import cross from "bootstrap-icons/icons/x.svg";

export default ({displayHandler, setView, setCurUser}) => {

    const register = (e) => {
        e.preventDefault();
        let user = e.target.username.value;
        let users = JSON.parse(localStorage.getItem("users"));
        if (user.length > 0 & users.indexOf(user) == -1) {
            localStorage.setItem("curUser", user);
            setCurUser(user);
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            displayHandler();
        }
        e.target.username.value = "";
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