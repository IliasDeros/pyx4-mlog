import React from 'react';
import { connect } from 'react-redux'

const Greeting = ({ authentication: { user } }) => {
  return user 
    ? <p className="greeting">Welcome back, {user.email}</p> 
    : null
}

const mapStateToProps = ({ authentication }) => ({
  authentication
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)