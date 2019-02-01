import React from 'react'

const Course = ({ course }) => {

    const course2 = course.map(c =>
        <Subcourse
            key={c.id}
            name={c.name}
            id={c.id}
            parts={c.parts}
        />
    )

    return (
        <div>
            {course2}
        </div>
    )
}

const Subcourse = ({ name, id, parts }) => {

    const osat = parts.map(part =>
        <p key={part.id}>{part.name} {part.exercises}</p>
    )

    const et = parts.map(e => e.exercises);
    const reducer = (acc, current) => acc + current;
    const total = et.reduce(reducer);

    return (
        <div>
            <h1 key={id}>{name}</h1>
            <ul>
                {osat}
                <p>Yhteensä {total} tehtävää</p>
            </ul>
        </div>

    )
}

export default Course