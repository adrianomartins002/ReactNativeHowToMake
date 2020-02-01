import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

/**
 * HomeScreen Component
 * Page to render titles of animes
 */
export default function NetworkScreen(props) {
  const [online, setOnline] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setOnline(state.isConnected);
    });
    unsubscribe();
  }, []);
  return (
    <View style={styles.container}>
      
      {online ?
      <Text>
        esta online
      </Text>
       :
       <Text>
       esta offline
     </Text>
      }
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
    backgroundColor: 'pink',
  },
});
