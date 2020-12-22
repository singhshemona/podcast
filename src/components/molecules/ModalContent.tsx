import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Button, Modal, Card, Input } from '@ui-kitten/components';

type Props = {
  val?: any;
  saveHighlight?: any;
  onChange?: any;
};

export const ModalContent = ({ val, saveHighlight, onChange }: Props): React.ReactElement => {

  return (
    <Card disabled={true}>
      <Input
        multiline={true}
        value={val}
        placeholder='Thoughts on this clip?'
        onChange={onChange}
      />
      <Button onPress={saveHighlight}>
        Save highlight
      </Button>
    </Card>
  );
}

