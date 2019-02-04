import React from 'react'

const Course = (props) => {
    const content = () => props.courses.map(course => <Content key={course.id} courses={props.courses} name={course.name} parts={course.parts}></Content>)
    return (
        <div>
            {content()}
        </div>

    )
}

const Part = (props) => {
    return (
        <p> {props.name} {props.exercises}</p>
    )
}

const Content = (props) => {
    const allParts = () => props.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}></Part>)
    return (
        <div>
            <Header course={props.name}/>
            {allParts()}
            <Total parts={props.parts} />
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
const Total = props => {
    const total = props.parts.reduce((sum, parts) => sum + parts.exercises, 0)
    return <p>yhteensä {total} tehtävää</p>
}


export default Course
