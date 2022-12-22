import React from "react"
import reactLogo from "../images/react-logo1.png"

export default function Header(){
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} alt="Logo" className="nav--icon"/>
                <h3 className="nav--logo_text">React Facts</h3>
                <h4 className="nav--title">React Course -  Project1</h4>
            </nav>
        </header>
    )
}
