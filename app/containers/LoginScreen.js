import React, { Component } from 'react';
import ReactNative from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Container, Header, Content, Button, Text, Form, Item, Input, Label, Thumbnail } from 'native-base';
import styleLogin from './LoginScreenStyle.js';
import styleLoader from './loaderStyle.js';
import JobsScreen from './JobsScreen.js';
import {
  AppRegistry,
} from 'react-native';
import { StatusBar, ActivityIndicator } from 'react-native'


const {
  Image,
  Stylesheet,
  TextInput,
  View
} = ReactNative;
import { connect } from 'react-redux';

class LoginScreen extends Component {

  state = {
    username: '',
    password: '',
    isLogged: false,
    jobs: null,
    animating: false,
    modalVisible: false
  }

  constructor() {
    super();

    this.onPress = this.onPress.bind(this);
  }


  onPress() {
    const { username, password, isLogged, jobs } = this.state;
    this.setState({ animating: true });
    this.props.login(username, password);
    // this.props.login('', '');
    if (this.props.user.loggedIn === true) {
      this.setState({ animating: false });
    }

    this.setState({isLogged: this.props.user.loggedIn.toString()});

  }


  render() {
    const uriImage = "https://static1.squarespace.com/static/5a140264a8b2b0d94baa3a3d/t/5ac937b6562fa799825792d7/1523136492961/Logo+text.png?format=500w";


    let screen = null;
    if (this.props.user.loggedIn === true && this.props.user.id !== 0 && this.props.user.id !== null) {
        this.props.getJobsHandler(this.props.user.id);
        screen = (
          <JobsScreen {...this.props}/>
        )
    }else {
      const animating = this.state.animating
      screen = (
        <View style={{marginTop: 20, marginLeft: 20, marginRight: 20}}>
          <ActivityIndicator
             animating = {animating}
             color = '#bc2b78'
             size = "large"
             style = {styleLoader.activityIndicator}/>
          <StatusBar barStyle = "dark-content" />
          <View style={styleLogin.container}>
            <Container style={styleLogin.imageStyle}>
              <Image source={{uri: uriImage}} style={{height: 60, width: 160, resizeMode: 'contain', alignItems:'center'}}/>
            </Container>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input
                  value={this.state.username}
                  onChangeText={username => this.setState({username})} />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={password => this.setState({password})} />
              </Item>
            </Form>
            <Button
              style={styleLogin.button}
              title={'LOGIN'}
              onPress={this.onPress}
              block
              success>
              <Text>Login</Text>
            </Button>

          </View>
        </View>
      )
    }

    return <View>
        {screen}
    </View>
  }
}


function mapStateToProps(state) {
  return {
    user: state.user,
    jobs: state.jobs
  };
}

export default connect(mapStateToProps)(LoginScreen);
