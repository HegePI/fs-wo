import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <p>{props.name.name}</p>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part part = {props.part.parts[0]} />
      <Part part = {props.part.parts[1]} />
      <Part part = {props.part.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.part.name}: {props.part.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <p>
      Yhteensä {props.part.parts[0].exercises + props.part.parts[1].exercises + props.part.parts[2].exercises} tehtävää
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 20
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
      <Header name = {course} />
      <Content part = {course} />
      <Total part = {course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
