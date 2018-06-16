import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import JobsScreen from './JobsScreen';
import {
  AppRegistry,
} from 'react-native';

export const JobsStack = StackNavigator({
  JobsSc: {screen: JobsScreen},
});

AppRegistry.registerComponent('KiffgoTest', () => JobsStack);
