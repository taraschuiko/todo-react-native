import React from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { types } from "../reducers/todoReducer";

export default function Todo(props) {
  return (
    <View style={styles.todo}>
      <Text
        style={styles.text, props.todo.completed && styles.textCompleted}
        onPress={() => props.complete(props.todo.id)}
      >
        {props.todo.name}
      </Text>
      <Text onPress={() => props.remove(props.todo.id)}>X</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  todo: {
    width: "100%",
    padding: 16,
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
  text: {
    fontSize: 18
  },
  textCompleted: {
    textDecorationLine: "line-through"
  }
});