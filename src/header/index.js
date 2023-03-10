import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  handleKeyUp = (event) => { 
    if (event.keyCode !== 13) return
    if (event.target.value.trim()==='') { 
      alert('Please enter your plan')
      return
    }
    const todoObj = {id:Math.random(),name:event.target.value,done:false}
    this.props.addToDo(todoObj)
    event.target.value=''
  }
  handleClick = () => { 
    if (this.input.value.trim()==='') { 
      alert('Please enter your plan')
      return
    }
    const todoObj = { id: Math.random(), name: this.input.value, done: false }
    this.props.addToDo(todoObj)
    this.input.value=''
  }
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <input
          type='text'
          placeholder='your plan...'
          className='input'
          onKeyUp={this.handleKeyUp}
          ref={(currentNode) => {this.input=currentNode } }
        />
        <button
          className='btn'
          onClick={this.handleClick}
        >Add</button>
      </div>
    )
  }
}
