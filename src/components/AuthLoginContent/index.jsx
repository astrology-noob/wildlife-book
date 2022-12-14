import React, {useState} from "react";

export default ({displayHandler, setView, setCurUser}) => {

    const signIn = (e) => {
        e.preventDefault();
        let user = e.target.username.value;
        if (JSON.parse(localStorage.getItem("users")).indexOf(user) >= 0) {
            setCurUser(user);
            localStorage.setItem("curUser", user);
            displayHandler();
        }
        e.target.username.value = "";
    }

    return <>
        <h2>Войти</h2>
        <form onSubmit={signIn}>
            <input type="text" name="username" placeholder="Название"/>
            <button type="submit">Войти</button>
        </form>
        <button className="change_view_btn" onClick={setView}>Зарегистрироваться</button>
    </> 
}