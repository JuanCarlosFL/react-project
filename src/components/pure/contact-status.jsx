import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contacto.class'

const ContactStatusComponent = ({ contact }) => {

  return (
    <div>
      <h2>
        Name: { contact.name }
      </h2>
      <h3>
        LastName: { contact.lastName }
      </h3>
      <h4>
        Email: { contact.email }
      </h4>
      <h4>
        Status: { contact.connected ? 'Contact in line' : 'Contact not available' }
      </h4>
    </div>
  );
};

ContactStatusComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactStatusComponent