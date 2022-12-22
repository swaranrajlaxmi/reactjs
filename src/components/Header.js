import React from "react"
import reactLogo from "../images/react-logo.png"

export default function Header(){
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} alt="Logo" className="nav-icon"/>
                <h3>React Facts</h3>
                <h4>React Course -  Project1</h4>
            </nav>
        </header>
    )
}
