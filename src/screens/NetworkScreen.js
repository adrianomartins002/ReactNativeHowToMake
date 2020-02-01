import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Card} from '../components/molecules';

const menu = [
  {
    title: 'Netinfo',
  },
];

/**
 * HomeScreen Component
 * Page to render titles of animes
 */
export default function NetworkScreen(props) {
  return <View style={styles.container} />;
}

NetworkScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
