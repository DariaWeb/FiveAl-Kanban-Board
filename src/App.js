import React, { Component } from 'react';
import Board from "./Board"
import Controls from "./Controls"
import './App.css';

let columnId = 0;
let cardId = 0;

const initCards = Array.from({length: 10}).map(() => ({
  id: ++cardId,
  title: `task ${cardId-1}`
}));

const initColumns = ['Backlog', 'To Do', 'Ongoing', 'Done'].map((title, index) => ({
  id: columnId++,
  title,
  cardIds: initCards.slice(index * 3, index * 3 + 3).map(card => card.id),
}));


export default class App extends Component {
  state = {
    cards: initCards,
    columns: initColumns,
    title: '', 
    cardId: '', 
    columnId: ''
  };

  addCard = (columnId, _title) => {
    const title = _title.trim();
    if (!title) return;

    const newCard = {id: ++cardId, title};
    this.setState(state => ({
      cards: [...state.cards, newCard],
      columns: state.columns.map(column => 
          column.id === columnId
            ? {...column, cardIds: [...column.cardIds, newCard.id]}
            : column
      ),
    }));
  };

  moveForward = (cardId, currentColId) => {
    this.setState(state => ({
      columns: state.columns.map(column =>  
        column.id === currentColId
        ? {...column, cardIds: [...column.cardIds.filter(id => id !== cardId)]}
        : column.id === currentColId + 1
        ? {...column, cardIds: [...column.cardIds, cardId]}
        : column
      ),
      cardId, 
      columnId: currentColId +1 
    }));
  };

  moveBack = (cardId, currentColId) => {
    this.setState(state => ({
      columns: state.columns.map(column => 
        column.id === currentColId
        ? {...column, cardIds: [...column.cardIds.filter(id => id !== cardId)]}
        : column.id === currentColId - 1
        ? {...column, cardIds: [...column.cardIds, cardId]}
        : column
      ),
      cardId, 
      columnId: currentColId -1 
    }));
  };

  deleteCard = (cardId) => {
    this.setState(state => ({
      cards: [...state.cards.filter(card => card.id !== cardId)],
    }))
  }

  getCard = (title, cardId, columnId) => {
    if (!title) return;
    this.setState({title, cardId, columnId})
  }

  render() {
  return (
    <main className="app">
      <Controls 
       addCard={this.addCard}
       moveForward={this.moveForward}
       moveBack={this.moveBack}
       title={this.state.title}
       cardId={this.state.cardId}
       columnId={this.state.columnId}
       deleteCard={this.deleteCard}
       />
      <Board 
      cards={this.state.cards}
      columns={this.state.columns}
      getCard={this.getCard}
      />
    </main>
  )
}}
