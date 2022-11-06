import React, { FC, ReactElement, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';
import Parse from "parse/react-native";

export default function Signup({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>Enter username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title={"Sign Up"} onPress={() => {}} />

      <Button title="Go back to Home" onPress={() => navigation.popToTop()} />
      <Button title="Go to Login" onPress={() => navigation.pop()} />
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    //flex: 1,
    borderwidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width:200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigate: {
    //flex: 1,
    borderwidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width:200,
    bottom: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});