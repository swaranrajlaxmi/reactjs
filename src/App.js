import React from "react"
import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
import Card from "./components/Card"
import travelList from "./data"

export default function App(){
   
    const cards = travelList.map(place => {
        return (
            <Card 
                key={place.startDate}
               {...place} 
            />
        )
    })
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    )
}

