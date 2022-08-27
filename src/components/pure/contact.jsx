import React from 'react'
import { Contact } from '../../models/contacto.class'
import ContactStatusComponent from '../container/contact-status';

const ContactComponent = () => {

  const defaultContact = new Contact('Juan Carlos', 'Fuentes', 'jcarlos@fuentesdev.es', false);

  return (
    <div>
      <h4>
        Your Contact
      </h4>
      <ContactStatusComponent contact={defaultContact}></ContactStatusComponent>

    </div>
  )
}

export default ContactComponent