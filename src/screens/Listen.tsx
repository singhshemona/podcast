import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import { config } from '../../config.js';

export const Listen = ({ navigation }: any): React.ReactElement => {
  const [ audio, setAudio ] = useState('');
  const currentPodcast = useSelector(state => state.currentPodcast);

  useEffect(() => {
    const getPodcastDetails = {
      url: 'https://listen-api.listennotes.com/api/v2/episodes/' + currentPodcast,
      method: 'GET',
      headers: { 'X-ListenAPI-Key': config.KEY },
    };

    axios(getPodcastDetails)
      .then(response => {
        console.log(response.data.audio)
        setAudio(response.data.audio)
      });
  }, [])

  return (
    <View style={styles.container}>
      <Text>{currentPodcast}</Text>
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
