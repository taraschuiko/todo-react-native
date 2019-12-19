import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Todo(props) {
  return (
    <View style={styles.todo}>
      <Text
        style={[styles.title, props.todo.completed && styles.titleCompleted]}
        onPress={() => props.complete(props.todo.id)}
      >
        {props.todo.name}
      </Text>
      <Text style={styles.remove} onPress={() => props.remove(props.todo.id)}>X</Text>
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
  remove: {
    padding: 16
  }
});