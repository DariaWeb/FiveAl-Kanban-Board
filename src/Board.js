import React from 'react'
import Column from './components/Column'
import Card from './components/Card'


export default function Board({columns, cards, getCard}) {
  return (
    <div className="board">
      <h1>Kanban Board</h1>
      {columns.map(column => (
        <Column
          key={column.id}
          title={column.title}
          data-testid={`stage-${column.id}`}
          >
            {column.cardIds
              .map(cardId => cards.find(card => card.id === cardId))
              .map((card, index) => 
                (card && <Card
                  key={card.id}
                  id={card.id}
                  columnId={column.id}
                  columnIndex={index}
                  title={card.title}
                  getCard={getCard}
                  data-testid={`task-${card.title}`}
                  />
                  ))}
                </Column>
              )) 
            
            }
    </div>

  )
}