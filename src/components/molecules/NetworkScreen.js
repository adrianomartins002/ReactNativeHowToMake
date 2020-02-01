import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

import Wifi from '../assets/icons/wifi.svg';
import * as Animatable from 'react-native-animatable';

export default function NetworkInformation() {
  const netInfo = useNetInfo();
  const [backgroundColor, setBackgroundCollor] = useState(true);
  const [messageConnection, setMessageConnection] = useState('Connected');
  const component = useRef(null);
  let contador = 0;

  useEffect(() => {
    if (netInfo.isConnected) {
      setMessageConnection('Connected!');
      setBackgroundCollor('#3846D4');
      component.current.fadeOut(4000);
    } else {
      component.current.slideInDown();
      setMessageConnection('Disconnected!');
      setBackgroundCollor('#B6470D');
      contador++;
    }
  }, [netInfo, messageConnection, contador]);

  return (
    <Animatable.View ref={component}>
      <View style={[styles.containerComponent, {backgroundColor}]}>
        <Wifi width={40} height={40} fill="#FFF" />
        <Text style={styles.textMessageConnection}>{messageConnection}</Text>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  containerComponent: {
    width: '100%',
    height: 90,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMessageConnection: {fontSize: 12, fontWeight: 'bold', color: '#FFF'},
});
