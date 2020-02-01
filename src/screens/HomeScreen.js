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
export default function HomeScreen(props) {
  function onPressCard() {
    props.navigation.navigate('Network');
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 2}} />
      <View style={{flex: 4}}>
        <FlatList
          data={menu}
          renderItem={() => <Card onPress={onPressCard} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F13',
  },
});
