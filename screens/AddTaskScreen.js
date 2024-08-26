import React, { useContext, useState } from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";
import { TaskContext } from "../context/AppContext";

export default function AddTaskScreen({ route, navigation }) {
  const [task, setTask] = useState("");

  const { addTask } = useContext(TaskContext);

  console.log(task);

  const onAddTask = (task) => {
    addTask(task);
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      {/* Here Add your Code to add Tasks */}
      <TextInput
        placeholder="Write here.."
        value={task}
        onChangeText={(text) => setTask(text)}
        style={styles.textInput}
      />
      <Pressable style={styles.addBtn} onPress={() => onAddTask()}>
        <Text>Add Task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  addBtn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 100,
  },
  textInput: {
    marginBottom: 20,
  },
});
