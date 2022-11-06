import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "./style.css";

export default ({setAuthModalState, setView, curUser, setCurUser}) => {
    return <header>
        <Link to="/">
            <div className="logo">Wildlife Book</div>
        </Link>

        <Link to="/data">
            <div className="data_link">Покемоны</div>
        </Link>

        <div className="profile">
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