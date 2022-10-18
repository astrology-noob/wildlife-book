import React, {useState} from "react";
import "./style.css";

export default ({curUser, setCurUser}) => {
    return <>
        <div>{curUser}</div>
        <button className="auth_logout" onClick={() => {localStorage.setItem("curUser", ""); setCurUser("");}}>Выйти</button>
    </>
}