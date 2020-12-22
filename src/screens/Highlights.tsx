import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Icon, Input, Text, Button, Layout, Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import SQLite from 'react-native-sqlite-storage';

export const Highlights = ({ navigation }: any): React.ReactElement => {
  
  const [ highlights, setHighlights ] = useState([]);
  const db = SQLite.openDatabase(
    {
      name: 'Central.db',
      location: 'default',
      createFromLocation: '~/Central.db',
    },
    () => {},
    error => {
      console.log(error);
    }
  );

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM highlights;', [], (tx, results) => {
        const rows = results.rows;
        let users = [];

        for (let i = 0; i < rows.length; i++) {
          users.push({
            ...rows.item(i),
          });
        }

        console.log(users)

        // setHighlights(users);
      });
    });
  }, [])

  return (
      <View style={styles.container}>
        {highlights}

        {db}
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