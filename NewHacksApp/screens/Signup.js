import React, { FC, ReactElement, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
// import { StackActions } from '@react-navigation/native';
// import Parse from "parse/react-native";


export default function Login({ navigation}) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  

  getLoginAPI = () =>{
    let user = {
      username,
      password
    }
    axios
      .get('http://100.67.94.157:8080/mycloset/create', {user})
      .then(function (response) {
        if (response) {
          navigation.navigate("Login")
        }
      })
      .catch(function (error) {
        alert("error");
      });


  }
  return (
    <SafeAreaView>
      <Text>Enter firstname:</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Firstname"}
        onChangeText={(text) => setFirstname(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Lastname"}
        onChangeText={(text) => setLastname(text)}
        autoCapitalize={"none"}
      />
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
      <StatusBar style="auto" />
    </SafeAreaView>
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