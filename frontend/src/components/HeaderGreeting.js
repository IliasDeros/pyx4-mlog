import React from 'react';
import { connect } from 'react-redux'
import HeaderLogCount from './HeaderLogCount'

const Greeting = ({ authentication: { user } }) => {
  return user 
    ? <p className="greeting">
      Welcome back, {user.email}. You have logged <HeaderLogCount /> movies so far.
    </p> 
    : null
}

const mapStateToProps = ({ authentication, logs }) => ({
  authentication
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)