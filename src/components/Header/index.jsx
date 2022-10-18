import React, {useState} from "react";
import "./style.css";
import AuthorisedUser from "../AuthorisedUser";

export default ({text, find, setModalState, setAuthModalState, setView, curUser, setCurUser}) => {
    return <header>
        <a href="" className="logo">Wildlife Book</a>
        <div className="buttons">
            <div className="search">
                <input type="search" className="search__inp" value={text} placeholder="Найти" onChange={e => find(e.target.value)}/>
            </div>
            <div className="add" onClick={setModalState}> Добавить животное +
            </div>
            {curUser ? <AuthorisedUser curUser={curUser} setCurUser={setCurUser}/> : <button className="auth_login" onClick={()=> {setAuthModalState(true); setView("login")}}>Войти</button>}
        </div>
    </header>
}