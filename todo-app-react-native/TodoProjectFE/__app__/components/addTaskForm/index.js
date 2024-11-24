import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const AddTaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const handleAddTask = () => {
        if (title.trim()) {
            onAddTask({ title, completed: false });
            setTitle('');
        }
    };
    return (
        <View>
            <Text style={styles.header}>Todo App</Text>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter task title"
                    value={title}
                    onChangeText={setTitle}
                />
                <Button title="Add Task" onPress={handleAddTask} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 2,
        padding: 8,
        marginRight: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
});

export default AddTaskForm;
