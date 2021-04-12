import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// data
import { todos } from "./todos.json";

// subcomponents
import TodoForm from "./Componentes/TodoForm";

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos,
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    removeTodo(index) {
        this.setState({
            todos: this.state.todos.filter((e, i) => {
                return i !== index;
            }),
        });
    }
    editTodo(index) {
        alert("metodo para editar " + index);
    }

    handleAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo],
        });
    }

    render() {
        const todos = this.state.todos.map((todo, i) => {
            return (
                <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                        <div className="card-title text-center">
                            <h3 className="title">{todo.title}</h3>
                        </div>
                        <div className="card-body">
                            <span className="badge badge-pill badge-info ml-2">
                                {todo.priority}
                            </span>
                            <h5 className="responsible">{todo.responsible}</h5>
                            <p>{todo.description}</p>
                        </div>
                        <div className="card-footer">
                            <button
                                className="btn btn-danger"
                                onClick={this.removeTodo.bind(this, i)}
                            >Delete
                            </button>
                        </div>
                    </div>
                </div>
            );
        });

        // RETURN THE COMPONENT
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">
                        Tasks
                        <span className="badge badge-pill badge-light ml-2">
                            {this.state.todos.length}
                        </span>
                    </a>
                </nav>

                <div className="container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Gestor de tareas con React</h2>
                    <br />
                    <div className="row mt-4">
                        <div className="col-md-4 text-center">
                            <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
                        </div>

                        <div className="col-md-8">
                            <div className="row">{todos}</div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default App;
