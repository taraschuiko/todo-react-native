import React from "react";
import { StyleSheet, View } from "react-native";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <View style={styles.todoList}>
      {
        props.todos.map(todo => {
          return (
            <Todo key={todo.id} todo={todo} completeTodo={props.completeTodo} />
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  todoList: {
    width: '100%',
    padding: 8
  },
});