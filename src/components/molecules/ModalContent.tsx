import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, Input, Text } from '@ui-kitten/components'

type Props = {
  time: number;
};

export const ModalContent = ({ time }: Props): React.ReactElement => {
  const [ value, setValue ] = useState('');
  const dispatch = useDispatch()

  const saveHighlight = () => {
    console.log(value)
    // dispatch({
    //   type: 'CREATE_HIGHLIGHT',
    //   payload: value,
    // });
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

