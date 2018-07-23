import React, { Component } from 'react';

class TodoItem extends Component {
deleteElement(id){
  console.log('Todoitem');
  this.props.deleteItem(id);
}
  render() {
  // console.log(this.props.todo.title);
    return (
      <li className="todoItem">
      <input type="checkbox" name ="check"/>
        {this.props.todo.title}
        <button onClick={this.deleteElement.bind(this,this.props.todo.id)}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
