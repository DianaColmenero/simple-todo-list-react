import React, {Component} from 'react';
import DisplayItem from './DisplayItem';


class DisplayList extends Component {
    render() {
        return (<ul>   
                { this.props.todos.map((todo, i) => {
                return <DisplayItem 
                        key={todo.id}
                        todo={todo}
                        handleDone={this.props.handleDone}
                        handleDelete={this.props.handleDelete.bind(null, todo.id)}
                        />
                    })}
                </ul>
                );

    }

}

export default DisplayList;