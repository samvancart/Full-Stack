import React from 'react'

const Number = (props) => {
  return (
    <div>
      numero: <input
        value={props.newNumber}
        onChange={props.handleNumberChange}
      />
    </div>
  )
}
export default Number