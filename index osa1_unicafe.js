import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)



const Header = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
        </>
    )
}

const Statistics = (props) => {
    if(props.allClicks===0){
        return(
            <div>Ei yhtään palautetta annettu</div>
        )
    }
    return (
        <div>
            <Part part={props.parts.parts[0].name} clicks={props.parts.parts[0].clicks} />
            <Part part={props.parts.parts[1].name} clicks={props.parts.parts[1].clicks} />
            <Part part={props.parts.parts[2].name} clicks={props.parts.parts[2].clicks} />
            <Total allClicks={props.allClicks} />
            < Average good ={props.parts.parts[0].clicks} neutral ={props.parts.parts[1].clicks} bad={props.parts.parts[2].clicks} allClicks={props.allClicks} />
            <Positive good = {props.parts.parts[0].clicks} allClicks={props.allClicks}/>
        </div>
    )
}

const Part = (props) => {
    return (
        <p>{props.part} {props.clicks}</p>
    )
}

const Total = (props) => {
    return (
        <p> yhteensä {props.allClicks}</p>

    )
}

const Average = (props) => {
    return (
        <p> keskiarvo {(props.good*1+props.neutral*0+props.bad*-1)/props.allClicks}</p>
    )
}

const Positive = (props) => {
    return (
        <p>
            Positiivisia {(props.good / props.allClicks) * 100} %
        </p>

    )
}



const App = (props) => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allClicks, setAll] = useState(0)
    const header1 = 'anna palautetta'

    const statistics = {
        name: 'statistiikka',
        parts: [
            {
                name: 'hyvä',
                clicks: good
            },
            {
                name: 'neutraali',
                clicks: neutral
            },
            {
                name: 'huono',
                clicks: bad
            }
        ]
    }



    const handleGoodClick = () => {
        setGood(good + 1)
        setAll(allClicks + 1)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        setAll(allClicks + 1)
    }
    const handleBadClick = () => {
        setBad(bad + 1)
        setAll(allClicks + 1)
    }

    return (
        <div>
            <Header name={header1} />
            <Button handleClick={handleGoodClick} text='hyvä' />
            <Button handleClick={handleNeutralClick} text='neutraali' />
            <Button handleClick={handleBadClick} text='huono' />
            <Header name={statistics.name} />
            <Statistics parts={statistics} allClicks={allClicks} good={good} neutral={neutral} bad={bad} total={allClicks} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
