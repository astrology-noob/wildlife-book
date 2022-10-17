import React, {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import AuthModal from "./components/AuthModal";
import "./index.css";

const animals = ["Амурский тигр", "Среднеазиатский леопард", "Ирбис", "Белый медведь", "Горбатый кит"];

export default () => {    
    const [searchText, search] = useState("");
    const [modalState, setModalState] = useState(false);
    const [data, setData] = useState(animals);
    const [authModalState, setAuthModalState] = useState(false);
    const [login_reg_view, setView] = useState("login");
    const [user, setUser] = useState(localStorage.getItem("user"));

    return <>
        <Header 
            text={searchText} 
            find={search} 
            setModalState={setModalState}
            setAuthModalState={setAuthModalState}
            user={user}
            setUser={setUser}/>
        <Main data={data} sort={searchText} />
        <Footer />
        <Modal 
            changeList={setData}
            setState={setModalState} 
            state={modalState} />
        <AuthModal
            setAuthState={setView}
            loginState={login_reg_view}
            setAuthModalState={setAuthModalState} 
            state={authModalState} 
            setUser={setUser}/>
    </>
}