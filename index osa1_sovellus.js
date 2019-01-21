import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <>
            <h1>{props.course.name}</h1>
        </>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts.parts[0].name} exercises={props.parts.parts[0].exercises} />
            <Part part={props.parts.parts[1].name} exercises={props.parts.parts[1].exercises} />
            <Part part={props.parts.parts[2].name} exercises={props.parts.parts[2].exercises} />
        </div>
    )
}

const Total = (props) => {
    return (
        <>
            {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}
        </>

    )
}

const Part = (props) => {
    return (
        <p>{props.part} {props.exercises}</p>
    )
}


const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
          {
            name: 'Reactin perusteet',
            exercises: 10
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
          },
          {
            name: 'Komponenttien tila',
            exercises: 14
          }
        ]
      }

    return (
        <div>
            <Header course={course} />
            <Content parts={course} />
            <p>yhteensä <Total parts={course} /> tehtävää</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))