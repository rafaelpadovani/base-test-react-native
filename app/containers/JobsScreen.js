import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Container, Header, Content, Button, List, ListItem, Text, Left, Body, Right, Title, Thumbnail } from 'native-base';
import styleLogin from './LoginScreenStyle.js';
import styleJobs from './ListStyle.js';
import Accordion from 'react-native-collapsible/Accordion';

const Dimensions = require('Dimensions');

let { heightH, widthW } = Dimensions.get("window");

let SECTIONS2 = [];

const SECTIONS = [
  {
    title: '£85',
    name: 'John Snow',
    time: 'Monday at 11:45',
    address: 'Westminster, Londres SW1A 0AA',
    content: 'http://www.michelagiuffrida.it/wp-content/uploads/2017/01/Londra-Saat-Kulesi.jpg'
  },
  {
    title: '£50',
    name: 'Ned Stark',
    time: 'Monday at 11:45',
    address: 'Abbey RdLondon NW6 4DN, Reino Unido',
    content: 'http://www.michelagiuffrida.it/wp-content/uploads/2017/01/Londra-Saat-Kulesi.jpg'
  },
  {
    title: '£65',
    name: 'Daenerys Targaryen',
    time: 'Monday at 11:45',
    address: 'Westminster, Londres SW1A 0AA',
    content: 'http://www.michelagiuffrida.it/wp-content/uploads/2017/01/Londra-Saat-Kulesi.jpg'
  }
];


const {
  Image,
  Stylesheet,
  TextInput,
  View,
  ScrollView
} = ReactNative;
import { connect } from 'react-redux';


export default class JobsScreen extends Component {

  state = {
   activeSection: false,
   collapsed: true,
   jobs: []
 };

  _renderSectionTitle(section) {
    return (
      <View style={styleJobs.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  _renderHeader(section) {
    return (
      <View style={styleJobs.header}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text></Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styleJobs.headerText}>£</Text>
            <Text style={styleJobs.headerText}>{section.cost}</Text>
          </View>
          <Text></Text>
          <View>
            <Text style={styleJobs.headerTextName}>{section.name}</Text>
            <Text style={styleJobs.headerTextTime}>{section.pickupDate}</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styleJobs.headerTitleAddress}>From: </Text>
              <Text style={styleJobs.headerTextAddress}>{section.startPostcode}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styleJobs.headerTitleAddress}>To: </Text>
              <Text style={styleJobs.headerTextAddress}>{section.endPostcode}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  _renderContent(section) {
    // let uriImage = "https://cdn.londonandpartners.com/visit/london-organisations/big-ben/100225-640x360-elisabeth-tower-clock-face-640.jpg";
    let uriImage = section.image;
    return (
      <View style={styleJobs.content}>

          <Image
            source={{uri: uriImage}}
            style={{height: 230, width: widthW, resizeMode: 'cover', alignItems:'center'}}/>

      </View>
    );
  }

  render(){
    const uriImage2 = "https://static1.squarespace.com/static/5a140264a8b2b0d94baa3a3d/t/5ac937b6562fa799825792d7/1523136492961/Logo+text.png?format=500w";

    SECTIONS2 = [...this.props.jobs];
    return <View>
            <Header style={styleJobs.headerApp}>
              <Left/>
                <Body>
                  <Title style={styleJobs.headerAppText}>Jobs</Title>
                </Body>
              <Right />
            </Header>
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'space-between'
            }}>
              <Accordion
                sections={SECTIONS2}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
              />
              <Text>Logged in: {this.props.user.loggedIn.toString()}</Text>
              <Text>ID: {this.props.user.id}</Text>
              <Text>Jobs: {this.props.jobs[0].cost}</Text>
            </ScrollView>

    </View>
  }
}
