import React, {Component} from 'react';

class DisplayList extends Component {
    constructor() {
        super();
        this.state= { done: 'false' };
    }

    handleDone() {
        var _done = this.state.done;
        this.setState({ done: _done });
    }


    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item, i) => {
                        return <li
                        key={item}
                        style={{ listStyle: 'none' }}>
                        <input type="checkbox"
                        checked={this.state.done}
                        onChange={this.handleDone.bind(this)}
                        />
                        { item }
                        <button
                        onClick={this.props.handleDelete.bind(null, item)}
                        >X</button>
                        </li>
                    })
                    }
                </ul>
            </div>
        );
    }

}

export default DisplayList;