import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function Login({ navigation}) {

  return (
    <View style={styles.container}>
      <Text>{'greeting'}</Text>
      <Button 
        title='Go to Sign Up'
        onPress={() => navigation.push("Signup")}
      />
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
});