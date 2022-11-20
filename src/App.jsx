import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import AuthModal from "./components/AuthModal";
import Profile from "./components/Profile";
import {Switch, Route} from "react-router-dom";
import "./index.css";
import Single from "./pages/Single";

import Api from "../src/api";

const Ctx = React.createContext({})

localStorage.setItem("users", "[\"su\", \"admin\"]")

const App = () => {
    const [searchText, setSearchText] = useState("");
    const [addModalState, setAddModalState] = useState(false);
    const [authModalState, setAuthModalState] = useState(false);
    const [login_reg_view, setView] = useState("login");
    const [curUser, setCurUser] = useState();

    const [animal, setAnimal] = useState({});
    const [animals, setAnimals] = useState([]);


    useEffect(() => {
        Api.getAll().then(data => setAnimals(data))
    }, []);

    // добавить пользователя в контекст
    // сделать несколько контекстов
    return <Ctx.Provider value={{
            animals: animals,
            setAnimals: setAnimals,
            searchText: searchText,
            updateSearchText: setSearchText,
            animal: animal,
            setAnimal: setAnimal,
        }}>

        <Header 
            setAuthModalState={setAuthModalState}
            setView={setView}
            curUser={curUser}
            setCurUser={setCurUser}/>

        <Switch>
            <Route exact path="/">
                <Main
                    setAddModalState={setAddModalState}
                    setAnimal={setAnimal} />
            </Route>
            <Route exact path="/profile">
                <Profile user={curUser} />
            </Route>
            <Route path="/animals/:name">
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
    </Ctx.Provider>
}

export {App, Ctx};