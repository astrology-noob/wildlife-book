import React, {useState} from "react";
import "./style.css";
import plus from "bootstrap-icons/icons/plus.svg"
import AuthorisedUser from "../AuthorisedUser";

export default ({text, find, setModalState, setAuthModalState, curUser, setCurUser}) => {
    return <header>
        <a href="" className="logo">Wildlife Book</a>
        <div className="buttons">
            <div className="search">
                <input type="search" className="search__inp" value={text} onChange={e => find(e.target.value)}/>
            </div>
            <div className="add" onClick={setModalState}>
                <img src={plus}/>
            </div>
            {curUser ? <AuthorisedUser curUser={curUser} setCurUser={setCurUser}/> : <button className="auth_login" onClick={setAuthModalState}>Войти</button>}
        </div>
    </header>
}