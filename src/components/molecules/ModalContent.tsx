import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, Input, Text } from '@ui-kitten/components'
import { db } from '../../../config.js'

type Props = {
  time: number
  podcastID: number
}

export const ModalContent = ({ time, podcastID }: Props): React.ReactElement => {
  const [ val, setValue ] = useState('');
  const dispatch = useDispatch()

  const saveHighlight = () => {
    db.ref('/highlights').push({ 
      note: val,
      podcastID: podcastID,
      timestamp: time,
     });
  }

  return (
    <Card disabled={true}>
      <Text>marking at: {time}</Text>
      <Input
        multiline={true}
        value={val}
        placeholder='Thoughts on this clip?'
        onChangeText={getVal => setValue(getVal)} 
      />
      <Button onPress={saveHighlight}>
        Save highlight
      </Button>
    </Card>
  );
}

