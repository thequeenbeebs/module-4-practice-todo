import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import FilterBar from './FilterBar'
import TaskContainer from './TaskContainer'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    selectedCategory: 'All',
    filtered: ""
  }

  changeSelectedCategory = (category) => {
    if (category === 'All') {
      this.setState({
        filtered: "",
        selectedCategory: category})
    } else {
      this.setState({
        filtered: this.state.tasks.filter(task => task.category === category),
        selectedCategory: category})
    }
  }

  handleSubmit = (event, text, category) => {
    event.preventDefault()
    let newTask = {
      text: text,
      category: category
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (task) => {
    this.setState({tasks: this.state.tasks.filter(obj => obj !== task)})
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <FilterBar changeSelectedCategory={this.changeSelectedCategory} categories={CATEGORIES} selectedCategory={this.state.selectedCategory}/>
        <TaskContainer tasks={this.state.filtered ? this.state.filtered : this.state.tasks} handleSubmit={this.handleSubmit} deleteTask={this.deleteTask}/> 
      </div>
    );
  }
}


export default App;
