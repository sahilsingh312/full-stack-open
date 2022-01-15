import React from 'react'


const Notification = ({message}) => {
  const errorMessage = {
    color: 'red',
    background: 'lightgrey',
    font_size: '20px',
    border_style: 'solid',
    border_radius: '5px',
    padding: '10px',
    margin_bottom: '10px'
  }
  

   const successMessage = {
      color: 'green',
      background: 'lightgrey',
      font_size: '20px',
      border_style: 'solid',
      border_radius: '5px',
      padding: '10px',
      margin_bottom: '10px'
    }
  
  

  
    if (message === null) {
        return null
      }
      if(message.includes('Added')){
        return (
          <div style={successMessage}>
        {message}
      </div>
        )
      }
      else{
        return (
          <div style={errorMessage}>
        {message}
      </div>
        )
      }
   
   
}

export default Notification
