import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux'



class SignUp extends Component {

state={
    email: '',
    password: '',
    firstname: '',
    lastname: ''
}

handleChange=(e)=>{

    this.setState({[e.target.id]: e.target.value});
}
handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
}
render() {
    const { auth } = this.props;
    if(auth.uid) return <Redirect to="/" />

    return (
      <div className="container">
      <form onSubmit={this.handleSubmit} className="white center">
      <h5 className="grey-text text-darken-3">SignIn</h5>
        <div className="input-field">
            <label htmlFor="email" >email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
            <label htmlFor="password" >password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
            <label htmlFor="firstname" >firstname</label>
            <input type="text" id="firstname" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
            <label htmlFor="lastname" >lastname</label>
            <input type="text" id="lastname" onChange={this.handleChange}/>
        </div>
        <div className="input-field">
            <button className="btn red lighten-1 z-depth-0">SignUp</button>
        </div>
      </form>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
    return{
      
      auth: state.firebase.auth
    }
  }

export default connect(mapStateToProps, null)(SignUp)
