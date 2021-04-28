import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string } from 'prop-types';

export default function Button(props) {
  const { label } = props;

  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
}

Button.propTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    marginBottom: 24,
    alignSelf: 'flex-start',
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
});
