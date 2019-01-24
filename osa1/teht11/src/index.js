import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <p>{props.name}</p>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part part = {props.part1} exer = {props.e1} />
      <Part part = {props.part2} exer = {props.e2} />
      <Part part = {props.part3} exer = {props.e3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Yhteensä {props.eka + props.toka + props.kolmas} tehtävää
    </p>
  )
}

const Part = (props) => {
  return(
    <p>{props.part}: {props.exer}</p>
  )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course} />
      <Content part1 = {part1} e1 = {exercises1} part2 = {part2} e2 = {exercises2} part3 = {part3} e3 = {exercises3} />
      <Total eka = {exercises1} toka = {exercises2} kolmas = {exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
