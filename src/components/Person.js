import React, { Component } from "react";
import AuthContext from '../context/auth-context';

import classes from "./person.module.css";

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        console.log("context", this.context.authenticated);
        this.inputElementRef.current.focus();
    }
  render() {
    return (
      <div className={classes.person}>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Login..</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input 
        // ref={(inputEl) => {this.inputElement = inputEl}}
        ref={this.inputElementRef}
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name} />
      </div>
    );
  }
}

export default Person;
