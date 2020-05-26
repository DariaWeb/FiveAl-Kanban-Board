import React from 'react'


export default function Card({title, columnId, id, children, getCard}) {
  
  const handleTitle = e => {
    const card = e.target.textContent;
    getCard(card, id, columnId);
  }

  return (
    <div className="card" onClick={handleTitle}>
    <div className="card__title">{title}</div>
    {children}
    </div>
  )
}