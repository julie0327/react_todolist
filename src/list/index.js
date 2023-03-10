import React, { Component } from 'react'
import Item from '../item/index'

export default class List extends Component {
  render() {
    return (
        <ul>
        {this.props.todos.map((todo) => { 
          return <Item {...todo} key={todo.id} updateToDo={this.props.updateToDo} removetodo={ this.props.removetodo} />
        })}
        </ul>
    )
  }
}
