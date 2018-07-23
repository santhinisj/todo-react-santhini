/* jshint esversion:6 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import AddTodo from './AddTodo';
import Todos from './Todos';
import uuid from 'uuid';

class TodoContainer extends Component {
    constructor(){
      super();
      this.state={
        todos:[]
      }
    }
    componentWillMount(){
      this.setState({todos:[
        {
          id:uuid.v4(),
          title:'add todo',
          // check: false;
        }
      ]})
    }
    AddTodoHandler(todo){
        let todos= this.state.todos;
        todos.push(todo);
        this.setState({todos:todos});
      }
      DeleteTodoHandler(id){
        console.log(" DeleteTodoHandler");
        let todos= this.state.todos;
        let index =todos.findIndex(x=>x.id === id);
        todos.splice(index,1);
        this.setState({todos:todos});
        
      }
      render(){
        return (
            <div className="TodoContainer">
             <h1>TODOLIST</h1>
             <AddTodo addTodo ={this.AddTodoHandler.bind(this)} />
             <Todos todos={this.state.todos} onDelete={this.DeleteTodoHandler.bind(this)}/>
            </div>
          );
      }
    }

    export default TodoContainer;
    