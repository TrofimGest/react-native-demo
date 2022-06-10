import { StyleSheet, Text, View } from 'react-native';
import { AddToDo } from './src/AddToDo';
import { Navbar } from './src/Navbar';

export default function App() {
  return (
    <View>
      <Navbar title='ToDo App' />
      <View style={styles.container}>
        <AddToDo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
