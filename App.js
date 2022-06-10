import react, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
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

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <Navbar title='ToDo App' />
      <View style={styles.container}>
        <AddToDo onSubmit={addTodo} />
        <FlatList
          data={todos}
          renderItem={({ item }) => <ToDo todo={item} onRemove={removeTodo} />}
          keyExtractor={(item) => item.id.toString()}
        />
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
