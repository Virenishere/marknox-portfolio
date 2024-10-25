import React from 'react';
import "./Contact.css"
const Contact = () => {
  return (
    <div className="form4" id='contact'>
      <form action="">
        <span>Contact Form</span>
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email" required />
        <input type="number" placeholder="Phone Number" required />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;