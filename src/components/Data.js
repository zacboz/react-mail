import React from "react";
import { findContactById } from "../services/contactsService";

export default class Data extends React.Component {
  constructor( props ) {
		super( props );

		this.state = {
			name: ""
			, company: ""
			, email: ""
      , phone: ""
		}
	}

  componentWillMount() {
    this.getContact.call(this, this.props.params.contactId);
  }

  getContact(contactId) {
    const data = findContactById( contactId );
    this.setState({
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone
    });
  }

	render() {
    return(
      <div>
       <h1>{ this.state.name }</h1>
       <h3>{ this.state.company }</h3>
       <p>{ this.state.email }</p>
       <p>{ this.state.phone }</p>
     </div>
    )
  }
}
