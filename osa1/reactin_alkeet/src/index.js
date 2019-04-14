import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = 'Reactin perusteet'
    const exercises1 = 10
    const part2 = 'Tiedonvälitys propseilla'
    const exercises2 = 7
    const part3 = 'Komponenttien tila'
    const exercises3 = 14

    return (
        <>
            <Header course={course} />
            <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
            <Total part1={exercises1} part2={exercises2} part3={exercises3} />
        </>
    )
}

const Header = (props) => (
    <> 
        <h1>{props.course}</h1>
    </>
)

const Content = (props) => {
    return(
        <>
            <Part part={props.part1} exercises={props.exercises1} />
            <Part part={props.part2} exercises={props.exercises2} />
            <Part part={props.part3} exercises={props.exercises3} />
        </>
    )
}

const Part = (props) => {
    return(
        <>
            {props.part} {props.exercises} <br />
        </>
    )
}

const Total = (props) => (
    <>
        <p>
            yhteensä {props.part1 + props.part2 + props.part3} tehtävää
        </p>
    </>
)

ReactDOM.render(<App />, document.getElementById('root'))