import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import { config } from '../../config.js';

export const Test = ({ navigation }: any): React.ReactElement => {
  const [ audio, setAudio ] = useState('');
  
  useEffect(() => {
    const options:{} = {
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
      <audio
        controls
        src={audio}
      />

      <Button
        title={'Go home page!'}
        // onPress={() => {
        //   navigation.push('Home')
        // }}
        onPress={() => navigation.navigate('Home')}
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
