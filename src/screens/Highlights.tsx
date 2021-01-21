import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Icon, Input, Text, Button, Layout, Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import { db } from '../../config.js';
import * as Sharing from 'expo-sharing';

export const Highlights = ({ navigation }: any): React.ReactElement => {
  
  const [ highlights, setHighlights ] = useState({});

  useEffect(() => {
    db.ref('/highlights').on('value', (querySnapShot:any) => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let allData = {...data};
      setHighlights(allData)
    });
  }, [])

  const shareNotes = () => {
      Sharing.shareAsync(highlights.toString())

    // Object.values(highlights).map((highlight:any, id:number) => 
    //   `At ${highlight.timestamp} you made the following note: ${highlight.note}`
    //   // <View key={id}>
    //   //   <Text>Name of Show / Episode</Text>
    //   //   <Text>{highlight.note}</Text>
    //   //   <Text>{highlight.timestamp}</Text>
    //   // </View>
    // )
    
  }

  return (
      <View style={styles.container}>
        <Button
          onPress={shareNotes}
        >
          Download Markdown Copy of Notes
        </Button>

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