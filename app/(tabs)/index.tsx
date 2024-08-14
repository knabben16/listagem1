import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Fazer compras', completed: false },
    { id: '2', text: 'Estudar React Native', completed: true },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const renderTask = ({ item }) => (
    <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
      <View style={styles.taskContainer}>
        <Text style={item.completed ? styles.completedTask : styles.task}>
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  taskContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  task: {
    fontSize: 16,
  },
  completedTask: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
});

export default App;