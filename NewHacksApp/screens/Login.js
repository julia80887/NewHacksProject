import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function Login({ navigation}) {

  return (
    <>
      <Button 
        title='Go to Sign Up'
        onPress={() => navigation.push("Signup")}
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
});