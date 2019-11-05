import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";

export default function Todo(props) {
  return (
    <TouchableHighlight style={styles.todo} onPress={() => props.completeTodo(props.todo.id)}>
      <Text style={styles.text, props.todo.completed && styles.textCompleted}>{props.todo.name}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  todo: {
    width: '100%',
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  switch: {
    marginRight: 8
  },
  text: {
    fontSize: 18
  },
  textCompleted: {
    textDecorationLine: 'line-through'
  }
});