import React, {useState} from "react";
import "./style.css";

export default () => {
    return <footer>
        <span className="hedge_icon">&#129428;</span>{new Date().getFullYear()}
    </footer>
}