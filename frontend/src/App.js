import React from 'react';
import { connect } from 'react-redux'

import './App.css';
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Movies from './components/Movies'
import Footer from './components/Footer'

function App({ authentication }) {
  let Content = LoginForm

  if (authentication.user || true /* debugging */) {
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

const mapStateToProps = ({ authentication }) => ({
  authentication
})

const mapDispatchToProops = () => ({})

export default connect(mapStateToProps, mapDispatchToProops)(App);
