import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Icon, Input, Text, Button, Layout, Autocomplete, AutocompleteItem } from '@ui-kitten/components';

export const Highlights = ({ navigation }: any): React.ReactElement => {
  
  const [ highlights, setHighlights ] = useState([]);

  useEffect(() => {

  }, [])

  return (
      <View style={styles.container}>
        {highlights}
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