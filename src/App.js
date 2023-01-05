import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App(){
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    console.log(tenzies)
    React.useEffect(() => {
        const firstSelectedValue = dice[0].value
        const sameValueAllDie = dice.every(die => die.value === firstSelectedValue)
        const isAllHeld = dice.every(die => die.isHeld)
        if(sameValueAllDie && isAllHeld) {
            setTenzies(true)
        }
    }, [dice])

    function generateDie(){
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice(){
        const allNewDiceArray = []
        for(let i = 0; i < 10; i++){
            allNewDiceArray.push(generateDie())
        }

        return allNewDiceArray
    }

    function rollDice(){
        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? die : generateDie()
                }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
        }
        
    }

    function holdDice(id){
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld} : die}
            ))
    }

    const dieElements = dice.map(die => 
    (<Die
        key={die.id} 
        holdDice={() => holdDice(die.id)} 
        isHeld={die.isHeld} 
        value={die.value}/>))
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {dieElements}
            </div>
            <button onClick={rollDice}className="roll">{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}


/* 
-CSS -put real dot on the dice
-track the number of rolls
-track the time it took to win
-save you best time to localStorage

 */