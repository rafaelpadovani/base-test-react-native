import { StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');

let { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    borderRadius: 5,
    marginTop: height*.2,
  },
  lists: {
    borderRadius: 5,
    marginTop: 30,
  },
  imageStyle: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 40,
  },
  button: {
    marginTop: 35,
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#c2185b'
  }
});
