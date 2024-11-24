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

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, [dispatch]);

  const handleAddTask = (task) => {
    dispatch(addTaskRequest(task));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTaskRequest(id));
  };

  const handleUpdateTask = (id) => {
    const updatedTask = { completed: true }; // Ví dụ: đánh dấu hoàn thành
    dispatch(updateTaskRequest({ id, updatedTask }));
  };

  if (loading) {
    return <View><Text>Loading...</Text></View>;
  }

  if (error) {
    return <View><Text>Error: {error}</Text></View>;
  }

  return (
    <View style={styles.container}>
      <AddTaskForm onAddTask={handleAddTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onDelete={handleDeleteTask}
            onUpdate={handleUpdateTask}
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
});

export default HomeScreen;
