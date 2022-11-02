import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "./style.css";
// import AuthorisedUser from "../AuthorisedUser";

export default ({text, find, setModalState, setAuthModalState, setView, curUser, setCurUser}) => {
    return <header>
        <Link to="/">
            <div className="logo">Wildlife Book</div>
        </Link>

        <Link to="/data">
            <div className="data_link">Загрузочка...</div>
        </Link>

        <div className="buttons">
            <div className="search">
                <input type="search" className="search__inp" value={text} placeholder="Найти" onChange={e => find(e.target.value)}/>
            </div>
            <div className="add" onClick={setModalState}> Добавить животное +
            </div>
                {
                curUser ? 
                (
                    <div className="authorised_user">

                        <Link to="/profile">
                            <div onClick={setCurUser(curUser)}>{curUser}</div> 
                        </Link>

                        <Link to="/">
                            <button 
                                className="auth_login" 
                                onClick={()=> {localStorage.setItem("curUser", ""); setCurUser("");}}>
                                    Выйти
                            </button>
                        </Link>
                    </div>
                ) :
                (
                    <Link to="/">
                        <button 
                            className="auth_login" 
                            onClick={()=> {setAuthModalState(true); setView("login")}}>
                                Войти
                        </button>
                    </Link>
                )}
        </div>
    </header>
}