import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NetworkInformation from '../components/molecules/NetworkScreen';

/**
 * HomeScreen Component
 * Page to render titles of animes
 */
export default function NetworkScreen(props) {
  return (
    <View>
      <NetworkInformation />
    </View>
  );
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
