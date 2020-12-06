import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Icon, Input } from '@ui-kitten/components';

export const Home = ({ navigation }: any): React.ReactElement => {
  const [value, setValue] = React.useState('');
  const SearchIcon = (props: any) => (
    <Icon {...props} name='search-outline' fill='#8F9BB3' />
  );
  return (
    <View style={styles.container}>
      <Input
        value={value}
        label='Explore'
        placeholder='What would you like to learn?'
        captionIcon={SearchIcon}
        onChangeText={nextValue => setValue(nextValue)}
      />
      <Button
        title={'Go to test!'}
        // onPress={() => {
        //   navigation.push('Test')
        // }}
        onPress={() => navigation.navigate('Test')}
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