import React from "react";
import { Link } from "react-router";
import { getContacts } from "../services/contactsService";
import Contact from "./Contact";
import Data from "./Data";


export default class Contacts extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			contacts: []
		}
	}
	componentWillMount(){
		this.setState( { contacts: getContacts() } );
	}

	render() {
		const styles = this.getStyles();

		const contacts = this.state.contacts.map( contact => (
			<Link key={contact._id} to={ `/contacts/${ contact._id}` }>
			<Contact
					company={ contact.company }
					email={ contact.email }
					key={ contact._id }
					name={ contact.name }
					phone={ contact.phone }
			/>
			</Link>
		) );

		return (
			<div>
				<h1>Contacts</h1>
				<div style={ styles.contactsWrapper }>
						{ contacts }
				</div>
			</div>
		);
	}

	getStyles() {
		return {
			contactsWrapper: {
				display: "flex"
				, flexWrap: "wrap"
				, justifyContent: "space-around"
			}
		}
	}
}
