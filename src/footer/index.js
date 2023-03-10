import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (event) => { 
    this.props.checkAlltodo(event.target.checked)
  }
  handleremove = () => { 
    this.props.removeAlltodo()
  }
  render() {
    const { todos } = this.props
    const total = todos.length
    const count = todos.reduce((pre,todo) => { 
        return pre + (todo.done ? 1 : 0)},0)
    return (
      <div className='footer'>
        <div className='span'>
          <span>{count}/{total}</span>
          <span>finish all</span>
          <input type='checkbox'
            checked={count === total && total !== 0 ? true : false} onChange={this.handleCheckAll} />
        </div>
        
        <button className='btn-clear' onClick={this.handleremove}>clear selected</button>
      </div>
    )
  }
}
