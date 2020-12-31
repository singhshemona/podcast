import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Icon, Input, Text, Button, Layout, Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import { db } from '../../config.js';

export const Highlights = ({ navigation }: any): React.ReactElement => {
  
  const [ highlights, setHighlights ] = useState({});

  useEffect(() => {
    db.ref('/highlights').on('value', (querySnapShot:any) => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let allData = {...data};
      setHighlights(allData)
    });
  }, [])

  return (
      <View style={styles.container}>
        {Object.values(highlights).map((highlight:any, id:number) => 
          <View key={id}>
            <Text>Name of Show / Episode</Text>
            <Text>{highlight.note}</Text>
            <Text>{highlight.timestamp}</Text>
          </View>
        )}

        <Button
          onPress={() => navigation.navigate('Listen')}
        >
          Go back to listening
        </Button>
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