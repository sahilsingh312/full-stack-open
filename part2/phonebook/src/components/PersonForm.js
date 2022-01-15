import React from 'react'

const PersonForm = ({personName, phoneNumber, handleNameChange, handleNumberChange, onSubmit}) => {
    return (
        <form>
        <div>
          name: <input value={personName} onChange={handleNameChange} />
        </div>
        <div>number: <input value = {phoneNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit" onClick={onSubmit}>
            add
          </button>
        </div>
      </form>
    )
}

export default PersonForm
