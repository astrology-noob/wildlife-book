import React, {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import AuthModal from "./components/AuthModal";
import Profile from "./components/Profile";
import {Switch, Route} from "react-router-dom";
import "./index.css";
import Data from "./pages/Data";
import Single from "./pages/Single";

import Api from "../src/api";
import "regenerator-runtime/runtime";

const animals = ["Амурский тигр", "Среднеазиатский леопард", "Ирбис", "Белый медведь", "Горбатый кит"];
localStorage.setItem("users", "[\"su\", \"admin\"]")

export default () => {
    const [searchText, search] = useState("");
    const [addModalState, setAddModalState] = useState(false);
    // const [data, setData] = useState(animals);
    const [authModalState, setAuthModalState] = useState(false);
    const [login_reg_view, setView] = useState("login");
    const [curUser, setCurUser] = useState();

    return <>

        <Header 
            setAuthModalState={setAuthModalState}
            setView={setView}
            curUser={curUser}
            setCurUser={setCurUser}/>

        <Switch>
            <Route exact path="/">
                <Main
                    text={searchText} 
                    find={search}
                    setAddModalState={setAddModalState} />
            </Route>
            <Route exact path="/profile">
                <Profile user={curUser} />
            </Route>
            <Route exact path="/data">
                <Data />
            </Route>
            <Route path="/data/:name">
                <Single />
            </Route>
        </Switch>
        
        <Footer />
        <Modal 
            setState={setAddModalState} 
            state={addModalState} />

        <AuthModal
            setAuthState={setView}
            loginState={login_reg_view}
            setAuthModalState={setAuthModalState} 
            state={authModalState} 
            setCurUser={setCurUser}/>
    </>
}