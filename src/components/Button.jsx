import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { func, string, shape } from 'prop-types';

export default function Button(props) {
  const { label, onPress, style } = props;

  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
  style: shape(),
};

Button.defaultProps = {
  onPress: null,
  style: null,
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
