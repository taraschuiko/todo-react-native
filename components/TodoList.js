import React from "react";
import { StyleSheet, View } from "react-native";
import Todo from "./Todo";
import NewTodo from "./NewTodo";
import RemoveCompleted from "./RemoveCompleted";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as actions } from "../reducers/todoReducer";

export function TodoList(props) {
  return (
    <View style={styles.todoList}>
      <NewTodo add={props.add} />
      {
        props.todos.map(todo => {
          return (
            <Todo key={todo.id} todo={todo} complete={props.complete} remove={props.remove} edit={props.edit} />
          )
        })
      }
      <RemoveCompleted
        removeCompleted={props.removeCompleted}
        todos={props.todos}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  todoList: {
    width: '100%',
    padding: 8
  },
});

function mapStateToProps(state) {
  const { todos } = state;
  return {
    todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: bindActionCreators(actions.add, dispatch),
    remove: bindActionCreators(actions.remove, dispatch),
    complete: bindActionCreators(actions.complete, dispatch),
    removeCompleted: bindActionCreators(actions.removeCompleted, dispatch),
    edit: bindActionCreators(actions.edit, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);