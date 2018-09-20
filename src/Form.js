import React ,{Component} from "react";

export default class Form extends React.Component{

  state={
    firstName:"",
    lasttName:"",
    username:"",
    email:"",
    password:"",
    
  };

  change = e => {
    this.props.onChange({[e.target.name]:e.target.value})
    this.setState({
      [e.target.name]:e.target.value
    });
  };

  handleSubmit = e =>{
    e.preventdefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName:"",
      lasttName:"",
      username:"",
      email:"",
      password:""
    });

    this.props.onChange({
      firstName:"",
      lasttName:"",
      username:"",
      email:"",
      password:""
    });
  };

  render(){
    return(
      <div className="container-fluid">
      <div className="row form">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
      <form onSubmit={this.handleSubmit.bind(this)} >
        <h3>REGISTER</h3>
        <input 
          type="text"
          name="firstName"
          placeholder="FirstName"
          value={this.state.firstName}
          onChange={e => this.change (e)}
          required
        />
        <br/>
        <input 
          type="text"
          name="lastName"
          placeholder="LastName"
          value={this.state.lastName}
          onChange={e => this.change (e)}
          required
        />
          <br/>
        <input 
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.change (e)}
        />
        <br/>
        <input 
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change (e)}
          required
        />
        <br/>
        <input
          type="password" 
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={ e => this.change (e)}
          required
        />
        <br/>
        <button>SUBMIT</button>
      </form>
      </div>
      <div className="col-sm-3"></div>
      </div>
      </div>
    );
  
  }

}
 
  





























