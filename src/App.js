
import React from "react"

export default function App() {
    const [questions, setQuestions] = React.useState({})

    React.useEffect(() => {
        console.log("hi")
        async function getQuestionsFromApi() {
            const res = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
            const data = await res.json()
            setQuestions(data.results)
        }
        getQuestionsFromApi()
    }, [])

    console.log(questions)
    return (
        <main>
            <h1 className="title">Quizzical</h1>
            <p className="instructions">Some description if needed</p>
            <button className="start-quiz">Start quiz</button>
        </main>
    )
}