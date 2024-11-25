import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Component TaskItem
const TaskItem = ({ task, onDelete, onUpdate }) => {
  if (!onDelete || !onUpdate) {
    console.error("onDelete or onUpdate is not a function");
    return null; // Tránh lỗi khi các props không tồn tại
  }

  return (
    <View style={styles.taskItem}>
      <TouchableOpacity
        style={[styles.checkBox, task.completed && styles.completed]}
        onPress={() => onUpdate({ id: task.id, completed: !task.completed })}
      >
        {task.completed && <Text style={styles.checkMark}>✔</Text>}
      </TouchableOpacity>
      <Text style={[styles.taskTitle, task.completed && styles.completedTask]}>
        {task.title}
      </Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.deleteButton}>
          <Text style={styles.buttonText}> ✗ </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    marginRight: 10,
    paddingLeft:4,
    backgroundColor: 'transparent',
  },
  
  completed: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    marginRight: 10,
    backgroundColor: '#4caf50',
  },
  checkMark: {
    color: '#fff',
    fontSize: 10,
  },
  actions: {
    flexDirection: 'row',
  },
  deleteButton: {
    backgroundColor: '#D44A',
    alignItems: 'center',
    padding: 5,
    borderRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default TaskItem;
