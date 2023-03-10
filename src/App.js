import React, { Component } from 'react'
import './App.css'
import Header from './header/index'
import List from './list/index'
import Footer from './footer/index'

export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: 'coding', done: true },
      { id: '002', name: 'shopping', done: false },
      { id: '003', name: 'walking', done: false },
    ]
  }
  addToDo = (todoObj) => { 
    const { todos } = this.state
    const newToDos = [todoObj, ...todos]
    this.setState({todos:newToDos})
  }
  updateToDo = (id,done) => { 
    const { todos } = this.state
    const newToDos = todos.map((todoObj) => { 
      console.log('selfid:' + todoObj.id);
      console.log(`click id is ${id}`);
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    this.setState({todos:newToDos})
  }
  removetodo = (id) => { 
    const { todos } = this.state
    const newToDos = todos.filter((todoObj) => { 
      return todoObj.id!==id
    })
    this.setState({todos:newToDos})
  }
  checkAlltodo = (done) => {
    const { todos } = this.state
    const newToDos=todos.map((todoObj) => { 
      return {...todoObj,done}
    })
    this.setState({todos:newToDos})
  }
  removeAlltodo = () => { 
    const { todos } = this.state
    const newToDos = todos.filter((todo) => { return todo.done === false })
    this.setState({todos:newToDos})
  }
  render() {
    return (
      <div className='container'>
        <div>
          <Header addToDo={this.addToDo} />
          <List todos={this.state.todos} updateToDo={this.updateToDo} removetodo={this.removetodo } />
          <Footer
            todos={this.state.todos}
            checkAlltodo={this.checkAlltodo}
            removeAlltodo={this.removeAlltodo } />
        </div>
      </div>
    )
  }
}

