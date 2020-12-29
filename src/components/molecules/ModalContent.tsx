import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, Input, Text } from '@ui-kitten/components'
import { db } from '../../../config.js';

type Props = {
  time: number;
};

export const ModalContent = ({ time }: Props): React.ReactElement => {
  const [ value, setValue ] = useState('');
  const dispatch = useDispatch()

  const saveHighlight = () => {
    // console.log(value)
    // const payloadObj = {
    //   id: 1,
    //   note: value,
    //   podcastID: 34289,
    //   timestamp: time,
    // }
    // dispatch({
    //   type: 'CREATE_HIGHLIGHT',
    //   payload: payloadObj,
    // });
    db.ref('/').on('value', (querySnapShot:any) => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let todoItems = {...data};
      console.log(todoItems)
      // this.setState({
      //   todos: todoItems,
      // });
    });
  }

  return (
    <Card disabled={true}>
      <Text>marking at: {time}</Text>
      <Input
        multiline={true}
        value={value}
        placeholder='Thoughts on this clip?'
        onChangeText={getVal => setValue(getVal)} 
      />
      <Button onPress={saveHighlight}>
        Save highlight
      </Button>
    </Card>
  );
}

