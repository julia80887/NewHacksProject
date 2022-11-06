import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function UploadPhoto({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Third</Text>
        <Button title="Upload Image" onPress={() => navigation.popToTop()} />
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