import React from "react";


export default class Todolistitem extends React.Component {

	// normally you dont want to have a constructor function inside of an inner component.
	// this is just for instructional purposes. setting the initial state to isEditing: false
	constructor(props) {
		super(props);

		this.state={isEditing: false};
	}
	// checks to see the state of the buttons and renders the appropriate buttons based on the state its in.
	renderActionsSection() {
		if(this.state.isEditing) {
			return(
				<td>
					<button> Save </button>
					<button onClick={this.onCancelClick.bind(this)}> Cancel </button>
				</td>
			);
		}
		// dont need an else statement because of the return. if it doesnt return the first
		// it will defualt return the second.
		return (
			<td>
				<button onClick={this.onEditClick.bind(this)}> Edit </button>
				<button> Delete </button>
			</td>
		);
	}

	render() {
		// this.renderActionsSection is how where the buttons get rendered based on the logic above.
		return(
			<tr>
				<td>{this.props.task}</td>
				{this.renderActionsSection()}
			</tr>
		)	
	}

	onEditClick() {
		// on click, set state to true instead
		this.setState({isEditing: true});
	}

	onCancelClick() {
		this.setState({isEditing: false});
	}
}