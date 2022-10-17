import React, {useState} from "react";
import "./style.css";
import plus from "bootstrap-icons/icons/plus.svg"
import AuthorisedUser from "../AuthorisedUser";

export default ({text, find, setModalState, setAuthModalState, user, setUser}) => {
    return <header>
        <a href="" className="logo">Wildlife Book</a>
        <div className="buttons">
            <div className="search">
                <input type="search" className="search__inp" value={text} onChange={e => find(e.target.value)}/>
            </div>
            <div className="add" onClick={setModalState}>
                {/* <i className="bi-bag-plus"></i> */}
                <img src={plus}/>
            </div>
            {user ? <AuthorisedUser user={user}/> : <button className="auth_login" onClick={setAuthModalState}>Войти</button>}
        </div>
    </header>
}