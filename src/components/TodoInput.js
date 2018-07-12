import React, { Component} from 'react';
import DisplayList from './DisplayList';


class TodoInput extends Component {
    constructor () {
        super();
        this.state = { text: '', items:['run', 'walk', 'swim'] } 
    } 

handleSubmit(e) {
    e.preventDefault();
    var text = this.state.text
    var newItems = this.state.items.concat(text);
    // console.log("submit", text);
    this.setState({ text:'', items: newItems })
    // console.log(newItems);
};

handleChange(e) {
    var text = e.target.value;
    this.setState({ text: text });
};

handleDelete(itemToDelete){
var newItems = this.state.items.filter((_item) => {
    return _item !== itemToDelete

});
this.setState( {items: newItems });

}

    render() {
        return(
            <div className="todo-wrapper">
                <h3>Todo list</h3>
                <form onSubmit={ this.handleSubmit.bind(this)}>
                <input 
                onChange={ this.handleChange.bind(this)} value={this.state.text} />
                <button>Add</button>
                </form>
                
                <DisplayList items={this.state.items}
                handleDelete={this.handleDelete.bind(this)}
                />
            </div>

        );
    }
}

export default TodoInput;