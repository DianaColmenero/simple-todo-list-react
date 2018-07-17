import React, { Component} from 'react';
import DisplayList from './DisplayList';

var rand = require('random-key');


class TodoInput extends Component {
    constructor () {
        super();
        this.state = { title: '', 
        todos:[ { title: 'run', done: false, id: 1},
         {title: 'walk', done: true, id: 2}, 
         {title: 'swim', done: false, id: 3} 
        ],
        backUpTodos:[ { title: 'run', done: false, id: 1},
         {title: 'walk', done: true, id: 2}, 
         {title: 'swim', done: false, id: 3} 
        ],
        // nextId: 4
    };
    } 

handleDone (idMarkedAsDone) {
    var _todos = this.state.todos;
    var todo = _todos.filter((todo) => {
        return todo.id === idMarkedAsDone;
    })[0];

    todo.done = !todo.done;

    this.setState({todos: _todos});
}

handleSubmit(e) {
    e.preventDefault();
    var title = this.state.title;
    var newTodos = this.state.todos.concat({ title: title, 
        id: rand.generate(), done: false });
    // console.log("submit", title);
    this.setState({ title: '', todos: newTodos, backUpTodos: newTodos });
    // console.log(newItems);
}

handleChange(e) {
    var title = e.target.value;
    this.setState({ title: title });
};

handleDelete(idToDelete) {
var newTodos = this.state.todos.filter( (todo) => {
    return todo.id !== idToDelete

});

this.setState( {todos: newTodos });

}

allTasks () {
    // console.log('prueba');
    var backUpTodos = this.state.todos.slice();
    // console.log(backUpTodos);
    backUpTodos.push();
    this.setState({ todos: this.state.backUpTodos });
  }

  completedTasks (e) {
    // console.log('complete');
    var backUpTodos = this.state.backUpTodos.filter((todo) => { return todo.done});
    // console.log(backUpTodos);
    this.setState({ todos: backUpTodos });
  }

  pendingTasks (e) {
    // console.log('pending');
    var backUpTodos = this.state.backUpTodos.filter((todo) => { return !todo.done});
    this.setState({ todos: backUpTodos });
  }

    render () {
        return (
        <div>
            <h3>React to-do-list</h3>
                <div>
                <form onSubmit={ this.handleSubmit.bind(this)}>
                <input type="text"
                onChange={ this.handleChange.bind(this)} 
                value={this.state.title} />
                <button>Add</button>
                </form>
                </div>

                <DisplayList 
                handleDone={this.handleDone.bind(this)}
                todos={this.state.todos}
                handleDelete={this.handleDelete.bind(this)}
                />
                
                    <button onClick={this.allTasks.bind(this)}>All tasks</button>
                    <button onClick={this.completedTasks.bind(this)}>Completed tasks</button>
                    <button onClick={this.pendingTasks.bind(this)}>Pending tasks</button>  
                    All: ({this.state.todos.length})
                    Completed: ({this.state.todos.filter((todo) => { return todo.done }).length})
                    Incomplete:({this.state.todos.filter((todo) => { return !todo.done }).length})
                
        </div>
            
        );
    }
}

export default TodoInput;