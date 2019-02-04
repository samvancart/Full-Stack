import React from 'react'

const Person = ({ name, number, deletePerson }) => {
const label = 'poista'

  return (
      <li>
        {name} {number}
        <button onClick={deletePerson}>{label}</button>
      </li>
  )
}
export default Person