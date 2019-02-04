import React from 'react'

const Name = (props) => {
  return (
    <div>
      nimi: <input
        value={props.newName}
        onChange={props.handleNameChange}
      />
    </div>

  )
}
export default Name