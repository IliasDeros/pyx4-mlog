import React from 'react';
import { connect } from 'react-redux'

import { fetchLogsAction } from './actions/logAction'
import './App.css';
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Movies from './components/Movies'
import Footer from './components/Footer'

class App extends React.Component {
  componentDidUpdate(prevProps) {
    this.queryLogsOnLogin(prevProps)
  }

  queryLogsOnLogin(prevProps) {
    if (!prevProps.authentication.user && this.props.authentication.user) {
      this.props.fetchLogs()
    }
  }

  render() {
    let Content = LoginForm

    if (this.props.authentication.user) {
      Content = Movies
    }

    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  authentication
})

const mapDispatchToProps = dispatch => ({
  fetchLogs: () => dispatch(fetchLogsAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
