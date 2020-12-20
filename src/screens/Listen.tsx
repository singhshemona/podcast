import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Button, Modal, Card, Input } from '@ui-kitten/components';
import axios from 'axios';
import { config } from '../../config.js';

export const Listen = ({ navigation }: any): React.ReactElement => {
  const [ episodeTitle, setEpisodeTitle ] = useState('');
  const [ image, setImage ] = useState('');
  const [ showTitle, setShowTitle ] = useState('');
  const [ audio, setAudio ] = useState('');
  const [ visible, setVisible ] = React.useState(false);
  const [ value, setValue ] = useState('');

  const audioRef = useRef(0);

  const currentPodcast = useSelector(state => state.currentPodcast);
  const highlights = useSelector(state => state.highlights);
  const dispatch = useDispatch();

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
        setAudio(response.data.audio)
      });
  }, [])

  // console.log(audioRef.current.currentTime);

  const saveHighlight = () => {
    dispatch({
      type: 'ADD_HIGHLIGHT',
      payload: value,
    });
    setVisible(false)
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text>{episodeTitle}</Text>
      <Text>{showTitle}</Text>
      <Icon style={styles.icon} name='heart-outline' fill='#8F9BB3' />
      <audio
        ref={audioRef}
        controls
        src={audio}
      />
      <Button onPress={() => setVisible(true)}>Make Note</Button>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Input
            multiline={true}
            value={value}
            placeholder='Thoughts on this clip?'
            onChange={(event: any) => setValue(event.target.value)}
          />

          <Text>{highlights}</Text>

          <Button onPress={() => setVisible(false)}>
            Cancel
          </Button>
          <Button onPress={() => saveHighlight}>
            Save highlight
          </Button>
        </Card>
      </Modal>
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
  icon: {
    width: 20,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
