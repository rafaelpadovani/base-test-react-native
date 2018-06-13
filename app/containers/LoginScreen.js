import React, { Component } from 'react';
import ReactNative from 'react-native';

const {
  Button,
  Image,
  Stylesheet,
  Text,
  TextInput,
  View
} = ReactNative;
import { connect } from 'react-redux';

class LoginScreen extends Component {
  constructor() {
    super();

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    this.props.login('', '');
  }

  render() {
    return <View style={{marginTop: 20}}>
      <View>
        <Text>Logged in: {this.props.user.loggedIn.toString()}</Text>
        <Button 
          title={'Login'}
          onPress={this.onPress}/>
      </View>
    </View>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(LoginScreen);
