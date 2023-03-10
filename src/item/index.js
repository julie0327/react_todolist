import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = { mouse: false };
  handleMouse = (change) => {
    return () => {
      this.setState({ mouse: change })
    }
  }
  handleCheck = (id) => {
    return (event) => {
      this.props.updateToDo(id, event.target.checked)
    }
  }
  handleRemove = (id) => { 
    if (window.confirm('Double Check')) { 
      this.props.removetodo(id)
    }
  }
  render() {
    return (
      <div>
        <li
          style={{backgroundColor:this.state.mouse?"#FFB6C1":'transparent'}}
          onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}>
          <input
            type='checkbox'
            className='input-item'
            checked={this.props.done}
            onChange={this.handleCheck(this.props.id)}
          />
          <span className='input-span'>{this.props.name}</span>
          <button
            className='btn-remove'
            style={{ display: this.state.mouse ? '' : 'none' }}
            onClick={() => this.handleRemove(this.props.id)}
            >remove</button>
        </li>      
      </div>
    )
  }
}
