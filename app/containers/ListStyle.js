import { StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');

let { height, width } = Dimensions.get("window");

export default StyleSheet.create({
title: {
  textAlign: 'center',
  fontSize: 22,
  fontWeight: '300',
  marginBottom: 0
},
header: {
  backgroundColor: '#fff',
  padding: 30,
  borderBottomWidth: 0.5,
  borderBottomColor: '#ccc',
},
headerText: {
  textAlign: 'left',
  fontSize: 35,
  fontWeight: '500'
},
headerTextName: {
  textAlign: 'left',
  fontSize: 20,
  fontWeight: '500',
  marginLeft: 45
},
headerTextTime: {
  textAlign: 'left',
  fontSize: 14,
  fontWeight: '500',
  marginLeft: 45
},
headerTitleAddress: {
  textAlign: 'left',
  fontSize: 14,
  fontWeight: '500',
  marginLeft: 45,
  color: '#616161',
  flex: 1,
  flexWrap: 'wrap',
  flexGrow: 1,
},
headerTextAddress: {
  textAlign: 'left',
  fontSize: 14,
  fontWeight: '500',
  marginLeft: 45,
  color: '#616161',
},
content: {
  padding: 0
  // backgroundColor: '#F5FCFF'
},
active: {
  backgroundColor: 'rgba(255,255,255,1)'
},
inactive: {
  backgroundColor: 'rgba(245,252,255,1)'
},
selectors: {
  marginBottom: 10,
  flexDirection: 'row',
  justifyContent: 'center'
},
selector: {
  backgroundColor: '#fff',
  padding: 10
},
activeSelector: {
  fontWeight: 'bold'
},
selectTitle: {
  fontSize: 14,
  fontWeight: '500',
  padding: 10
},
wrapperCollapsibleList: {
  flex: 1,
  marginTop: 20,
  overflow: 'hidden',
  backgroundColor: '#FFF',
  borderRadius: 5
},
headerApp: {
  backgroundColor: '#c2185b'
},
headerAppText: {
  color: '#fff'
},
imageStyle: {
  flex:1,
  flexDirection:'row',
},
});
