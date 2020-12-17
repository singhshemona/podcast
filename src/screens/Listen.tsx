import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from '@ui-kitten/components';
import axios from 'axios';
import { config } from '../../config.js';

export const Listen = ({ navigation }: any): React.ReactElement => {
  const [ episodeTitle, setEpisodeTitle ] = useState('');
  const [ image, setImage ] = useState('');
  const [ showTitle, setShowTitle ] = useState('');

  const currentPodcast = useSelector(state => state.currentPodcast);

  const HeartIcon = (props) => (
    <Icon {...props} name='heart-outline' fill='#8F9BB3' />
  );

  useEffect(() => {
    const getPodcastDetails = {
      url: 'https://listen-api.listennotes.com/api/v2/episodes/' + currentPodcast,
      method: 'GET',
      headers: { 'X-ListenAPI-Key': config.KEY },
    };

    axios(getPodcastDetails)
      .then(response => {
        console.log(response.data)
        setEpisodeTitle(response.data.title)
        setShowTitle(response.data.podcast.title)
        setImage(response.data.image)
      });
  }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text>{episodeTitle}</Text>
      <Text>{showTitle}</Text>
      {HeartIcon}
      {/* <audio
        controls
        src={audio}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
  },
});
