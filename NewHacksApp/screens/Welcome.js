import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Button 
        title="Login"
        onPress={() => navigation.navigate("Login", { language: "english" })}
      />
      <Button 
        title="Sign Up"
        onPress={() => navigation.navigate("Signup", { language: "english" })}
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
  image: {
    marginBottom: 40,
  },
});