import React from 'react'


export default function Button({title, onClick, disabled}) {

  return (
    <div>
     <button className="button" onClick={onClick} disabled={disabled}>
       {title} 
      </button>
    </div>
  )
}