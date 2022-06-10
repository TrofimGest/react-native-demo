import react, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddToDo } from './src/AddToDo';
import { Navbar } from './src/Navbar';
import ToDo from './src/ToDo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  return (
    <View>
      <Navbar title='ToDo App' />
      <View style={styles.container}>
        <AddToDo onSubmit={addTodo} />
        <View>
          {todos.map((todo) => (
            <ToDo todo={todo} key={todo.id} />
          ))}
        </View>
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
