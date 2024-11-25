import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTasksRequest,
  addTaskRequest,
  deleteTaskRequest,
  updateTaskRequest,
} from '../redux/actions/task.actions';
import TaskItem from '../components/taskItem';
import AddTaskForm from '../components/addTaskForm';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  // Fetch tasks on mount
  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  // Handlers
  const handleAddTask = (task) => {
    if (task && task.title) {
      dispatch(addTaskRequest(task));
    }
  };

  const handleDeleteTask = (id) => {
    if (id) {
      dispatch(deleteTaskRequest(id));
      }
  };

  const handleUpdateTask = (task) => {
    if (task && task.id) {
      dispatch(updateTaskRequest(task)); 
    }
  };

  // Render loading or error state
  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  // Render the task list
  return (
    <View style={styles.container}>
      <AddTaskForm onAddTask={handleAddTask} />
      <FlatList
        data={tasks} // Ensure tasks is an array
        keyExtractor={(item) => item.id?.toString() } // Fallback for missing id
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={(id) => handleDeleteTask(id)}
            onUpdate={(updatedTask) => handleUpdateTask(updatedTask)} // Truyền toàn bộ task
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
