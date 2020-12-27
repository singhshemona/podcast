import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Icon, Button, Modal, Card, Input } from '@ui-kitten/components'
import axios from 'axios'
import { config } from '../../config.js'
import { ModalContent } from '../components/molecules/ModalContent'
import { rootReducer } from '../redux/store/index'

export const Listen = ({ navigation }: any): React.ReactElement => {
  const [ episodeTitle, setEpisodeTitle ] = useState('');
  const [ image, setImage ] = useState('');
  const [ showTitle, setShowTitle ] = useState('');
  const [ audio, setAudio ] = useState('');
  const [ visible, setVisible ] = React.useState(false);

  const audioRef = useRef(0);

  const currentPodcast = useSelector((state:ReturnType<typeof rootReducer>) => state.podcast.currentPodcastId);

  useEffect(() => {
    const getPodcastDetails:{} = {
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
        {/* <ModalContent time={audioRef.current.currentTime} /> */}
        <ModalContent time={4} />
        <Button onPress={() => setVisible(false)}>
          Cancel
        </Button>
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
