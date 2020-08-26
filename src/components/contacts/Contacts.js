import React, { Component } from "react";
import Contact from "./Contact";

import { Consumer } from "../../context";

class Contacts extends Component {
  deleteContact = (id) => {
    console.log(id);

    const updatedContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );

    // change state
    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;

          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
