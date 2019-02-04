import React from 'react'
import Name from './Name'
import Number from './Number'

const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addName}>
        <Name
          newName={props.newName}
          handleNameChange={props.handleNameChange}
        />
        <Number
          newNumber={props.newNumber}
          handleNumberChange={props.handleNumberChange}
        />
        <button type="submit">lisää</button>
      </form>
    </div>
  )
}
export default PersonForm