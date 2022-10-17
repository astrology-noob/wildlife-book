import React, {useState} from "react";
import "./style.css";
import cross from "bootstrap-icons/icons/x.svg";
import AuthLoginContent from "../AuthLoginContent";
import AuthRegContent from "../AuthRegContent";

export default ({setAuthState, loginState, setAuthModalState, state, setCurUser}) => {

    const viewHandler = () => {
        if (loginState == "login") {
            setAuthState("reg");
        }
        else setAuthState("login");
    }

    const stateHandler = () => {
        setAuthModalState(!state);
    }

    const modalStyle = {
        display: state ? "flex" : "none"
    }

    return <div className="modal_wrapper" style={modalStyle}>
        <div className="modal">
            <div className="modal__close" onClick={stateHandler}><img src={cross} alt="modal close btn"/></div>
            <div className="modal__content">
                {loginState == "login" ? <AuthLoginContent displayHandler={stateHandler} setView={viewHandler} setCurUser={setCurUser}/> : <AuthRegContent displayHandler={stateHandler} setView={viewHandler} setCurUser={setCurUser}/>}
            </div>
        </div>
    </div>
}