import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import creditsScene from './src/screens/creditsScene';
import GpsNavigation from './src/screens/GpsNavigation';
import FetchScreen from "./src/screens/FetchScreen";
import MapScreen from "./src/screens/MapScreen";
//import dataFetchingPost from  './src/components/dataFetchingPost';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Credits: creditsScene,
    Navigation: GpsNavigation,
    FetchScreen: FetchScreen,
    MapScreen: MapScreen,

  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#00CED1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 