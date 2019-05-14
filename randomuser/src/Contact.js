import React from 'react';

const Contact = ({user}) => {
    return (
        <div>
      <p>Address : {user.address} </p>
      <p>Email : {user.email} </p>
      <p>Phone number : {user.phone}</p>
    </div>
    );
}

export default Contact;
    