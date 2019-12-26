import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Todo(props) {
  return (
    <View style={styles.todo}>
      <Text
        style={[styles.title, props.todo.completed && styles.titleCompleted]}
        onPress={() => props.complete(props.todo.id)}
      >
        {props.todo.name}
      </Text>
      <FontAwesome5 name="pen" style={styles.edit} />
      <FontAwesome5 name="times" style={styles.remove} onPress={() => props.remove(props.todo.id)} />
    </View>
  )
}

const styles = StyleSheet.create({
  todo: {
    width: "100%",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  switch: {
    marginRight: 8
  },
  title: {
    fontSize: 18,
    padding: 16,
    flex: 1
  },
  titleCompleted: {
    textDecorationLine: "line-through"
  },
  edit: {
    padding: 16,
    fontSize: 16,
    color: "#666"
  },
  remove: {
    padding: 16,
    fontSize: 22,
    color: "#EF476F",
    marginRight: 4
  }
});