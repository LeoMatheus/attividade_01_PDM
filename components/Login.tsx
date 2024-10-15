import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Login() {
  const [username, setUsername] = useState("Leo");
  const [password, setPassword] = useState("123");

  function handleLogin(): string {
    return `Login : ${username} senha: ${password}`
  }
  /* Leo */

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Password"
        placeholderTextColor="#aaa"
      />
      <Button title="Login" onPress={() => { console.log(handleLogin()) }} />
      <Text style={styles.message}>
        Not registered? <Text style={styles.link}>Create an account</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  message: {
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});
