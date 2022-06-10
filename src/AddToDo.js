import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import react, { useState } from 'react';

export const AddToDo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handlePress = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('String is empty :(');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        onChangeText={setValue}
        value={value}
        style={styles.input}
        placeholder='Enter something...'
        autoCorrect={false}
      />
      <Button title='Add' onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  },
});
