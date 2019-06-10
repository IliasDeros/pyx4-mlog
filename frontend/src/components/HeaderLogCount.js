import React from 'react';
import { connect } from 'react-redux'

const LogCount = ({ logs }) =>
  <span>{logs.loading ? '...' : logs.logs.length}</span>

const mapStateToProps = ({ authentication, logs }) => ({
  logs
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(LogCount)