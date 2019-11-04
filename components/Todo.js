import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Todo(props) {
  return (
    <Text style={styles.todo}>{props.todo.name}</Text>
  )
}

const styles = StyleSheet.create({
  todo: {
    width: '100%',
    fontSize: 18,
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});