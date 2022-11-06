import { StatusBar } from 'expo-status-bar';
import React, { FC, ReactElement, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
//import { StackActions } from '@react-navigation/native';
import axios from 'react';

export default function Login({ navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  getLoginAPI = () =>{
    let user = {
      username,
      password
    }
    axios
      .get('http://100.67.94.157:8080/mycloset/isValidUser', {user})
      .then(function (response) {
        if (response) {
          navigation.navigate("UploadPhoto")
        }
      })
      .catch(function (error) {
        alert("error");
      });


  }
  return (
    <>
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
      <Button 
        title="Login"
        onPress={() => getLoginAPI()}
      />
      

      
      <Button 
        title='Go to Sign Up'
        onPress={() => navigation.navigate("Signup")}
      />
      <StatusBar style="auto" />
    </>
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