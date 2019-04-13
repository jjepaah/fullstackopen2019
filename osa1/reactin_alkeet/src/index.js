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
            <Content part={part1} exercises={exercises1} />
            <Content part={part2} exercises={exercises2} />
            <Content part={part3} exercises={exercises3} />
            <Total part1={exercises1} part2={exercises2} part3={exercises3} />
        </>
    )
}

const Header = (props) => (
    <>
        <h1>{props.course}</h1>
    </>
)

const Content = (props) => (
    <>
        <p>{props.part} {props.exercises}</p>
    </>
)

const Total = (props) => (
    <>
        <p>
            yhteensä {props.part1 + props.part2 + props.part3} tehtävää
        </p>
    </>
)

ReactDOM.render(<App />, document.getElementById('root'))