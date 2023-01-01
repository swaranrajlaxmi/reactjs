import React from "react"
import Header from "./components/Header"
import BodyCont from "./components/BodyCont"

export default function App() {
    const [darkMode, setDarkMode] = React.useState(true)
    function toggleDarkMode(){
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
    return (
        <div className="container">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <BodyCont darkMode={darkMode}/>
        </div>
    )
}