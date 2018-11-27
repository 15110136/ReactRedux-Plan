import React from 'react';
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authAction";
import { connect } from 'react-redux'

const SignedInLink=(props)=>{
  return(
    <ul className="right">
      <li><NavLink to='/create'>New Project</NavLink></li>
      <li><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
      <li><NavLink to='/' className="btn btn-floating blue lighten-1">DT</NavLink></li>
    </ul>
  );
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signOut:()=>dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLink)
