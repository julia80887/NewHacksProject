import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Third</Text>
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
});