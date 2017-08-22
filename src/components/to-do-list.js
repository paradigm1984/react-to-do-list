import _ from "lodash";
import React from "react";
import Todolistheader from "./to-do-list-header";
import TodoListItem from "./to-do-list-item";


export default class Todolist extends React.Component {

	renderItems() {
		return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} />);

		// the (todo, index) => is shorthand for
		// function(todo, index) {
		// 	   return <Todolistitem />	
		// }

		// the {...todo} is shorthand for writing out the properties in the todo array, meaning
		// task={todo.task} isCompleted={todo.isCompleted}, instead of assiging it by writing it out
		// the ... references it 
	}

	render() {
		console.log(this.props.todos);
		return(
			<table>
				<Todolistheader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		)	
	}
}