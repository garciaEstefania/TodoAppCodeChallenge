import React, { useContext } from "react";
import { FlatList, Pressable, StyleSheet, View, Text } from "react-native";
import { TaskContext } from "../context/AppContext";

export default function HomeScreen({ navigation }) {
  const { tasks } = useContext(TaskContext);

  const renderitem = ({ item }) => {
    console.log("item", item);

    return (
      <View style={{ width: "100%", height: 30, backgroundColor: "red" }}>
        <Text style={{ color: "#000" }}>{item}</Text>
      </View>
    );
  };

  const addTask = () => {
    navigation.navigate("AddTask");
  };

  return (
    <View style={styles.container}>
      {/* Here add your Code for Task List and button to navigate to add new tasks, also remember todo's should be able to be deleted. */}
      <FlatList data={tasks} renderItem={(item) => renderitem(item)} />
      <Pressable style={styles.Addbtn} onPress={() => addTask()}>
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
  Addbtn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 100,
  },
});
