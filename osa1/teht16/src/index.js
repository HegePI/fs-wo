import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>

)

const Stats = ({ stats }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>{stats[0].name}</td>
                    <td>{stats[0].amount}</td>
                    <td>{stats[0].end}</td>
                </tr>
                <tr>
                    <td>{stats[1].name}</td>
                    <td>{stats[1].amount}</td>
                    <td>{stats[1].end}</td>
                </tr>
                <tr>
                    <td>{stats[2].name}</td>
                    <td>{stats[2].amount}</td>
                    <td>{stats[2].end}</td>
                </tr>
                <tr>
                    <td>{stats[3].name}</td>
                    <td>{stats[3].amount}</td>
                    <td>{stats[3].end}</td>
                </tr>
                <tr>
                    <td>{stats[4].name}</td>
                    <td>{stats[4].amount}</td>
                    <td>{stats[4].end}</td>
                </tr>
                <tr>
                    <td>{stats[5].name}</td>
                    <td>{stats[5].amount}</td>
                    <td>{stats[5].end}</td>
                </tr>
            </tbody>
        </table>
    )

}

const pos = (good, all) => {
    if (all === 0) {
        return 0
    }
    return good / all * 100
}

const aver = (good, bad, all) => {
    if (all === 0) {
        return 0
    }
    return (good * 1 + bad * -1) / all
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const GoodHandleClick = () => {
        setAll(all + 1)
        setGood(good + 1)
    }

    const NeutralHandleClick = () => {
        setAll(all + 1)
        setNeutral(neutral + 1)
    }

    const BadHandleClick = () => {
        setAll(all + 1)
        setBad(bad + 1)
    }

    const stats = [
        { name: 'hyvä', amount: good, end: '' },
        { name: 'neutraali', amount: neutral, end: '' },
        { name: 'huono', amount: bad, end: '' },
        { name: 'Yhteensä', amount: all, end: '' },
        { name: 'Keskiarvo', amount: aver(good, bad, all), end: '' },
        { name: 'Positiivista', amount: pos(good, all), end: '%' }
    ]

    if (all === 0) {
        return (
            <div>
                <h1>Anna palautetta</h1>
                <Button handleClick={GoodHandleClick} text='hyvä' />
                <Button handleClick={NeutralHandleClick} text='neutraali' />
                <Button handleClick={BadHandleClick} text='huono' />

                <h1>Statistiikka</h1>
                <p>Ei yhtään palautetta annettu</p>
            </div>
        )
    }
    return (
        <div>
            <h1>Anna palautetta</h1>
            <Button handleClick={GoodHandleClick} text='hyvä' />
            <Button handleClick={NeutralHandleClick} text='neutraali' />
            <Button handleClick={BadHandleClick} text='huono' />

            <h1>Statistiikka</h1>
            <Stats stats={stats} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))