import React from 'react'


export default function Column({title, children}) {

  return (
    <div className="column">
    <div className="column__title">{title}</div>
      {children}
    </div>
  )
}
