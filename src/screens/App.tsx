import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { config } from '../../config.js';

export const App = (): React.ReactElement => {
  const [ audio, setAudio ] = useState('');
  
  useEffect(() => {
    const options = {
      url: 'https://listen-api.listennotes.com/api/v2/episodes/02f0123246c944e289ee2bb90804e41b',
      method: 'GET',
      headers: { 'X-ListenAPI-Key': config.KEY },
    };

    axios(options)
      .then(response => {
        console.log(response.data.audio)
        setAudio(response.data.audio)
      });
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <audio
        controls
        src={audio}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
