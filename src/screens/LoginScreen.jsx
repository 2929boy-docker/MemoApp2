import React, { useState, useEffect } from 'react';
import {
  Text, TextInput, StyleSheet, View, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import Loading from '../components/Loading';

export default function LoginScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      } else {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  function handlePress() {
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      .catch((error) => {
        Alert.alert(error.code);
      })
      .then(() => {
        setLoading(false);
      });
  }
  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inner}>
        <Text style={styles.title}>Log in</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Button
          label="Submit"
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'SignUp' }],
              });
            }}
          >
            <Text style={styles.footerLink}>Sign up here?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
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
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
});
