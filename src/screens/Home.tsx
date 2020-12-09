import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Icon, Input, Text, Button, Layout, Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import axios from 'axios';
import { config } from '../../config.js';

export const Home = ({ navigation }: any): React.ReactElement => {
  const movies = [
    { title: 'Star Wars' },
    { title: 'Back to the Future' },
    { title: 'The Matrix' },
    { title: 'Inception' },
    { title: 'Interstellar' },
  ];
  
  const [value, setValue] = useState('');
  const [trending, setTrending] = useState('');
  const [data, setData] = React.useState(movies);

  const SearchIcon = (props: any) => (
    <Icon {...props} name='search-outline' fill='#8F9BB3' />
  );

  const getPodcastDetails = () => {
    console.log('hey')
  }

  useEffect(() => {
    const options = {
      url: 'https://listen-api.listennotes.com/api/v2/episodes/02f0123246c944e289ee2bb90804e41b',
      method: 'GET',
      headers: { 'X-ListenAPI-Key': config.KEY },
    };

    axios(options)
      .then(response => {
        console.log(response.data.image)
        setTrending(response.data.image)
      });
  }, [])

  const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());

  const onSelect = (index) => {
    setValue(data[index].title);
  };

  const onChangeText = (query) => {
    setValue(query);
    setData(movies.filter(item => filter(item, query)));
  };

  const renderOption = (item, index) => (
    <AutocompleteItem
      key={index}
      title={item.title}
      accessoryLeft={SearchIcon}
    />
  );

  return (
    <View style={styles.container}>
      <Layout style={styles.flex}>
        <Input
          style={{ flex: 3 }}
          value={value}
          placeholder='What would you like to learn?'
          accessoryRight={SearchIcon}
          onChangeText={nextValue => setValue(nextValue)}
        />
        <Button
          style={{ flex: 1 }}
          onPress={getPodcastDetails}
        >
          Search
        </Button>
      </Layout>

      <Autocomplete
        placeholder='Place your Text'
        value={value}
        accessoryRight={SearchIcon}
        onChangeText={onChangeText}
        onSelect={onSelect}>
        {data.map(renderOption)}
      </Autocomplete>

      <Button
        onPress={() => navigation.navigate('Test')}
      >
        Go to test page!
      </Button>
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