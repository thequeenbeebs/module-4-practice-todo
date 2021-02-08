import React from 'react';

class TaskContainer extends React.Component{
    state = {
        text: "",
        category: "Code"
    }

    handleChange = (event, name) => {
        this.setState({[name]: event.target.value})
    }

    render() {
        return(
            <div className="tasks">
                <h5>Tasks</h5>
                <form className="new-task-form" onSubmit={event => this.props.handleSubmit(event, this.state.text, this.state.category)}>
                    <input placeholder="New task details" type="text" value={this.state.text} name="text"
                        onChange={event => this.handleChange(event, "text")}></input>
                    <select name="category"
                        onChange={event => this.handleChange(event, "category")}>
                        <option>Code</option>
                        <option>Food</option>
                        <option>Money</option>
                        <option>Misc</option>
                    </select>
                    <input type="submit" value="Add task"></input>
                </form>
                <div>
                    {this.props.tasks.map(task => {
                       return ( <div className="task">
                            <div className="label">{task.category}</div>
                            <div className="text">{task.text}</div>
                            <button onClick={() => this.props.deleteTask(task)} className="delete">X</button>
                        </div>
                        )}
                    )}
                </div>
            </div>
        )
    }
    
}

export default TaskContainer;
