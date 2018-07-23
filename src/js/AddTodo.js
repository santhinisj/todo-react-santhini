import React, { Component } from 'react';
import uuid from 'uuid';
class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: {}
        };
    }

    handleSubmit(e) {
        if (this.refs.title.value !== '') {
            this.setState({
                newTodo: {
                    id: uuid.v4(),
                    title: this.refs.title.value
                }
            }, function() {
                this.props.addTodo(this.state.newTodo);

            })
        }
        e.preventDefault();
    }
    render() {
        return ( < div >
            <
            h3 >
            Add a new item:
            <
            /h3> <
            input type = "text"
            ref = "title" / >
            <
            button onClick = { this.handleSubmit.bind(this) }
            value = 'submit' > Add < /button> < /
            div >
        );
    }
}

export default AddTodo;