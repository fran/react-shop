import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { authMiddleware, authReducer as auth, login, logout } from 'redux-implicit-oauth2'
import { applyMiddleware, combineReducers, createStore } from 'redux'

const config = {
  url: "http://35.246.165.105:9001/authorizationserver/oauth/authorize",
  client: "client-side",
  redirect: "http://35.246.165.105:9001/authorizationserver/oauth2_implicit_callback",
  scope: "basic",
  width: 400, // Width (in pixels) of login popup window. Optional, default: 400
  height: 400 // Height (in pixels) of login popup window. Optional, default: 400
}

const Login2 = ({ isLoggedIn, login, logout }) => {
  if (isLoggedIn) {
    return <button type='button' onClick={logout}>Logout</button>
  } else {
    return <button type='button' onClick={login}>Login with popup</button>
  }
}

Login2.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn
})

const mapDispatchToProps = {
  login: () => login(config),
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Login2)
