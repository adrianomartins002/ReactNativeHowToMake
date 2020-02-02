import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NetworkInformation from '../components/molecules/NetworkScreen';

/**
 * HomeScreen Component
 * Page to render titles of animes
 */
export default function NetworkScreen(props) {
  return (
    <View style={styles.container}>
      <NetworkInformation />
      <Text style={styles.textStyle}>
        Ei você! Para que teste a funcionalidade, alterne entre desligar e ligar
        o wifi do seu smartphone.
      </Text>
    </View>
  );
}

NetworkScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {justifyContent: 'center', textAlign: 'center', width: 300},
});
