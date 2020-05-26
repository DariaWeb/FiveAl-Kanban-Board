import React, {Component} from 'react'
import Button from "./components/Button"


export default class Controls extends Component {
  state={
    value: '',
  }

  onAddCard = e => {
    e.preventDefault();
    this.props.addCard( 0, this.state.value);
    this.setState({value: ''})
  };

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  onMoveForward = e => {
    e.preventDefault();
    this.props.moveForward(this.props.cardId, this.props.columnId)
  }

  onMoveBack = e => {
    e.preventDefault();
    this.props.moveBack(this.props.cardId, this.props.columnId)
  }

  onDelete = e => {
    e.preventDefault();
    this.props.deleteCard(this.props.cardId)
    this.setState({value: ''})
  }

render() {
  const { title, columnId } = this.props
  return (
    <div className="controls">
      <h1>Controls</h1>
      <form className="form">
        <div className="input">
        <input
          type="text"  
          name="input"
          placeholder="New task name"
          onChange={this.handleChange}
          value={this.state.value}
          data-testid="new-task-name-input"  
        />
        <Button onClick={this.onAddCard} data-testid="create-task-btn" title="Create" disabled={this.state.value === ''? true: false}/>
        </div>
        <div className="input">
        <input
          type="text"
          name="input"
          value={this.props.title}
          placeholder="Selected task name"
          readOnly
          data-testid="selected-task-field"  
        />
        <Button onClick={this.onMoveBack} title="Move back" disabled={!title ||  columnId === 0? true: false} data-testid="move-back-btn"/>
        <Button onClick={this.onMoveForward} title="Move forward" disabled={!title || columnId === 3? true: false} data-testid="move-forward-btn"/>
        <Button onClick={this.onDelete} title="Delete" data-testid="delete-btn"/>
          </div>
      </form>
    </div>
  )
}}