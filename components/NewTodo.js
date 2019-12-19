import React from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight, Text, Platform } from 'react-native';

export default class NewTodo extends React.Component {
  state = {
    name: ""
  }

  handleNameChange(text) {
    this.setState(() => ({
      name: text
    }))
  }

  add() {
    if (this.state.name.trim()) {
      this.props.add(this.state.name);
      this.setState(() => ({
        name: ""
      }))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.name}
          onChangeText={(text) => this.handleNameChange(text)}
          onSubmitEditing={() => this.add()}
        ></TextInput>
        <TouchableHighlight style={styles.button} underlayColor="#e0e0e0" onPress={() => this.add()}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
  },
  textInput: {
    flex: 5,
    marginRight: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: Platform.OS === "android" ? 14 : 16,
    fontSize: 18
  },
  button: {
    flex: 1,
    padding: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
  }
})