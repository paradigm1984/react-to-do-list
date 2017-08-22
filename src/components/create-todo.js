import React from "react";

export default class Createtodo extends React.Component {

	render() {
		return(
			<form>
				<input type="text" placeholder="add a todo!" />
				<button> Create </button>
			</form>
		)	
	}
}