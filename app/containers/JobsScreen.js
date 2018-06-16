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
    let cust = section.cost + '';
    let mainNumber = cust.slice(0, cust.length-2);
    let percent = cust.slice(cust.length-2, cust.length);
    percent = ',' + percent;

    let dateString = section.pickupDate + '';
    let currentDate = dateString.slice(0, 10);
    let gsDayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    let d = new Date(currentDate);
    let dayName = gsDayNames[d.getDay()];

    let shortHour = dateString.slice(dateString.length-8, dateString.length-3);


    return (
      <View style={styleJobs.header}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Text></Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styleJobs.headerText}>£</Text>
            <Text style={styleJobs.headerText}>{mainNumber}</Text>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <Text></Text>
              <Text style={styleJobs.headerTextPercent}>{percent}</Text>
            </View>
          </View>
          <Text></Text>
          <View style={styleJobs.info}>
            <Text style={styleJobs.headerTextName}>{section.name}</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styleJobs.headerTextTime}>{dayName}</Text>
              <Text style={styleJobs.headerTextTime}> at </Text>
              <Text style={styleJobs.headerTextTime}>{shortHour}</Text>
            </View>
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

  sortByTime(array){
    let dateString1 = '';
    let currentDate1 = '';
    let dateString2 = '';
    let currentDate2 = '';
    var swapped;
    do {
      for (var i=0; i < array.length-1; i++) {
        dateString1 = array[i].pickupDate + '';
        currentDate1 = dateString1.slice(0, 4);
        currentDate1 = parseInt(currentDate1);
        dateString2 = array[i+1].pickupDate + '';
        currentDate2 = dateString2.slice(0, 4);
        currentDate2 = parseInt(currentDate2);
        if (currentDate1 > currentDate2) { //year greater
          var temp = array[i];
          array[i] = array[i+1];
          array[i+1] = temp;
        }else if (currentDate1 === currentDate2) { //year equal
          currentDate1 = dateString1.slice(5, 7); //get month
          currentDate1 = parseInt(currentDate1);
          currentDate2 = dateString2.slice(5, 7);
          currentDate2 = parseInt(currentDate2);
          if (currentDate1 > currentDate2) { //month greater
            temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
          }else if (currentDate1 === currentDate2) { // month equal
            currentDate1 = dateString1.slice(8, 10); // get day
            currentDate1 = parseInt(currentDate1);
            currentDate2 = dateString2.slice(8, 10);
            currentDate2 = parseInt(currentDate2);
            if (currentDate1 > currentDate2) { // day greater
              temp = array[i];
              array[i] = array[i+1];
              array[i+1] = temp;
            }else if (currentDate1 === currentDate2) { // day equal
              currentDate1 = dateString1.slice(11, 13); // get hour
              currentDate1 = parseInt(currentDate1);
              currentDate2 = dateString2.slice(11, 13);
              currentDate2 = parseInt(currentDate2);
              if (currentDate1 > currentDate2) { // hour greater
                temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
              }else if (currentDate1 === currentDate2) { // hour equal
                currentDate1 = dateString1.slice(14, 16); // get minutes
                currentDate1 = parseInt(currentDate1);
                currentDate2 = dateString2.slice(14, 16);
                currentDate2 = parseInt(currentDate2);
                if (currentDate1 > currentDate2) { // minutes greater
                  temp = array[i];
                  array[i] = array[i+1];
                  array[i+1] = temp;
                }
              }
            }
          }
        }
      }
    } while (swapped);
    return array;
  }

  render(){
    const uriImage2 = "https://static1.squarespace.com/static/5a140264a8b2b0d94baa3a3d/t/5ac937b6562fa799825792d7/1523136492961/Logo+text.png?format=500w";

    SECTIONS2 = [...this.props.jobs];
    for (let i=0;i<SECTIONS2.length;i++) {
      if (SECTIONS2[i].status !== 'Confirmed') {
        SECTIONS2.splice(i, 1);
      }
    }
    SECTIONS2 = this.sortByTime(SECTIONS2);
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
