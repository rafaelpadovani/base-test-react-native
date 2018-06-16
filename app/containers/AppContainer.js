import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import LoginScreen from './LoginScreen';
import JobsScreen from './JobsScreen.js';
import { createStackNavigator } from 'react-navigation';
import {
  AppRegistry,
} from 'react-native';


class AppContainer extends Component {
  render() {
    return <LoginScreen {...this.props} />
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect((state) => { return {} }, mapDispatchToProps)(AppContainer);
