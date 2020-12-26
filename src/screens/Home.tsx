import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, View, Image } from 'react-native';
import { Icon, Input, Text, Button, Layout, Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import axios from 'axios';
import { config } from '../../config.js';

export const Home = ({ navigation }: any): React.ReactElement => {
  const [value, setValue] = useState('')
  const [search, setSearch] = useState(false)
  const [title, setData] = useState([])
  const [ id, setId ] = useState([])
  
  const dispatch = useDispatch()

  const SearchIcon = (props) => (
    <Icon {...props} name='search-outline' fill='#8F9BB3' />
  );

  const CloseIcon = (props) => (
    <Icon {...props} name='close-outline' fill='#8F9BB3' onClick={() => setSearch(false)} />
  );

  const getPodcastDetails = () => {
    const getPodcastID:{} = {
      url: 'https://listen-api.listennotes.com/api/v2/search?q=' + value.replace(' ', '%20') + '&sort_by_date=0&type=episode&offset=0&safe_mode=0',
      method: 'GET',
      headers: { 'X-ListenAPI-Key': config.KEY },
    };

    axios(getPodcastID)
      .then(response => {
        setId(response.data.results.map(podcast => podcast.id))
        setData(response.data.results.map(podcast => podcast.title_original))
      });
  }

  const sendPodcastId = (id) => {
    dispatch({
      type: 'SET_PODCAST_ID',
      payload: id
    })
    navigation.navigate('Listen');
  }

  return (
      <View style={styles.container}>
        <Layout style={styles.flex}>
          <Input
            style={{ flex: 3 }}
            value={value}
            placeholder='What would you like to learn?'
            accessoryRight={search ? CloseIcon : SearchIcon}
            onChangeText={getVal => {setValue(getVal); setSearch(true)}}
          />
          <Button
            style={{ flex: 1 }}
            onPress={getPodcastDetails}
          >
            Search
          </Button>
        </Layout>
        {search ? 
          title.length > 0 && 
            title.map((name, i) => 
              <Button onPress={() => sendPodcastId(id[i])} key={i}>{name}</Button>
            )
          :
          <>
            <Text>
              Trending Discussions
            </Text>
            {/* add some fake data of trending discussions here? */}
            <Image
              style={styles.image}
              // source={{ uri: "'" + trending + "'" }}
              source={{ uri: 'https://www.reactnative.express/static/logo.png' }}
            />
            <Text>
              Subscribed
            </Text>
            <Text>
              You're currently not subscribed to any episodes. Search above to add some!
            </Text>
            <Button
              onPress={() => navigation.navigate('Test')}
            >
              Go to test page!
            </Button>
            <Button
              onPress={() => navigation.navigate('Highlights')}
            >
              View all highlights!
            </Button>
          </>
        }
      </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 200,
  },
  container: {
    backgroundColor: '#fff',
  },
  layout : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});