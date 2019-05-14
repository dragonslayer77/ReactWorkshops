import React, { Component } from 'react';
import Contact from './Contact';

class User extends Component {
  render(){
    return (
      this.props.users.map(user => (
        <div key={user.id}>
        <img src={user.picture} alt="name" />
        <p>Name : {user.name}</p>
        <p>Age : {user.age}</p>
        <Contact user={user}/>
      </div>
    ))
    )
  }
}

export default User;
