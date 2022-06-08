import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('blue');

  function handlePress() {
    if (color === 'blue') {
      setColor('red');
    } else if (color === 'red') {
      setColor('black');
    } else if (color === 'black') {
      setColor('green');
    } else if (color === 'green') {
      setColor('blue');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
      <StatusBar style='auto' />
      <Button onPress={handlePress} title={`${color} button`} color={color} />
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
  text: {
    color: 'green',
    fontSize: 30,
  },
});
