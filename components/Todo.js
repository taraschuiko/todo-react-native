import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Todo extends React.Component {
  state = {
    isEditing: false,
    name: this.props.todo.name
  }
  
  toggleEditing = () => {
    this.setState(prevState => ({
      ...prevState,
      isEditing: !prevState.isEditing
    }))
  }

  handleNameChange(text) {
    this.setState(prevState => ({
      ...prevState,
      name: text
    }))
    console.log(text);
  }

  completeEditing = () => {
    this.props.edit({
      ...this.props.todo,
      name: this.state.name
    })
    this.toggleEditing();
  }

  render() {
    return (
      <View>
        {!this.state.isEditing ? (
          <View style={styles.todo}>
            <Text
              style={[styles.title, this.props.todo.completed && styles.titleCompleted]}
              onPress={() => this.props.complete(this.props.todo.id)}
            >
              {this.props.todo.name}
            </Text>
            <FontAwesome5 name="pen" style={styles.edit} onPress={() => this.toggleEditing()} />
            <FontAwesome5 name="times" style={styles.remove} onPress={() => this.props.remove(this.props.todo.id)} />
          </View>
        ) : (
          <View style={styles.todo}>
            <TextInput
              value={this.state.name}
              style={[styles.title]}
              onChange={text => this.handleNameChange(text.nativeEvent.text)}
              onSubmitEditing={() => this.completeEditing()}
              ref={input => input != null ? input.focus() : 0}
            />
            <FontAwesome5 name="check" style={styles.completeEdit} onPress={() => this.completeEditing()} />
            <FontAwesome5 name="times" style={styles.cancelEdit} onPress={() => this.toggleEditing()} />
          </View>
        )}
      </View>
    )
  }
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
    flex: 1,
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
  },
  completeEdit: {
    padding: 16,
    fontSize: 22,
    color: "#99D17B",
  },
  cancelEdit: {
    padding: 16,
    fontSize: 22,
    color: "#666",
    marginRight: 4
  }
});