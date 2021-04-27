import React from 'react';
import {
  ScrollView, TextInput, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyBoardSafeView from '../components/KeyBoardSafeView';

export default function MemoEditScreen() {
  return (
    <KeyBoardSafeView style={styles.container} behavior="height">
      <AppBar />
      <ScrollView style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </ScrollView>
      <CircleButton name="check" />
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
