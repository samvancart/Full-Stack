import React from 'react'

const Filter = (props) => {
  return (
    <div>
      rajaa näytettäviä: <input
        type="text"
        value={props.newFilter}
        onChange={props.handleNewFilterChange}
      />
    </div>
  )
}
export default Filter