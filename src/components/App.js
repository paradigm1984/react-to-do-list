import React from "react";
import Todolist from "./to-do-list";
import Createtodo from "./create-todo";

// mock data
const todos = [
{
	task: "make react tutorial",
	isCompleted: false
},
{
	task: "eat dinner",
	isCompleted: true
}
];

export default class App extends React.Component {
	// in this constructor function, the state thats being set is 
	// what and how many todos are in the todos array.
	constructor(props) {
		super(props);

		this.state = {
			todos: todos
		};
	}

	render() {
		return(
			<div>	
				<h1> React Todos App </h1>
				<Createtodo />
				<Todolist todos={this.state.todos} />
			</div>
		)	
	}
}