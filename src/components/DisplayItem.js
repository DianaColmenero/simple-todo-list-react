import React, { Component} from 'react';

class DisplayItem extends Component {
    constructor() {
        super();
        this.state= { done: 'false' };
    }


    render () {
        var todo = this.props.todo;
        var title = todo.title;
        var _style = "line-through";
        if(!this.props.todo.done)
			_style ="none";
        return (
            <div>
                 <li style={{ listStyle: 'none' }}>
                        <input type="checkbox"
                        checked={todo.done}
                        onChange={this.props.handleDone.bind(null, todo.id)}
                        />
                        <span style={{"textDecoration": _style}}>{ todo.title }</span>
                        <button
                        onClick={this.props.handleDelete.bind(null, todo.id)}
                        >X</button>
                        </li>
            </div>
        );
    }
}

export default DisplayItem;