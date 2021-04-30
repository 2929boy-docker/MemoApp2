import React from 'react';
import {
  ScrollView, TextInput, StyleSheet,
} from 'react-native';

import CircleButton from '../components/CircleButton';
import KeyBoardSafeView from '../components/KeyBoardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  return (
    <KeyBoardSafeView style={styles.container} behavior="height">
      <ScrollView style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </ScrollView>
      <CircleButton
        name="check"
        onPress={() => { navigation.goBack(); }}
      />
    </KeyBoardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: 'top',
  },
});
