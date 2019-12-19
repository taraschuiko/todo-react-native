import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

export default function RemoveCompleted(props) {
  return !!props.todos.filter(todo => todo.completed).length && (
    <TouchableHighlight style={styles.button} underlayColor="#e0e0e0" onPress={() => props.removeCompleted()}>
      <Text style={styles.buttonText}>Remove completed</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    marginLeft: 32,
    marginRight: 32,
    marginTop: 8
  },
  buttonText: {
    textAlign: "center"
  }
})