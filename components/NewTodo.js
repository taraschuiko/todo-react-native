import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class NewTodo extends React.Component {
  state = {
    name: ""
  }

  handleNameChange(text) {
    this.setState(() => ({
      name: text
    }))
  }

  add(name) {
    this.props.add(this.state.name);
    this.setState(() => ({
      name: ""
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.name}
          onChangeText={(text) => this.handleNameChange(text)}
          onSubmitEditing={() => this.add()}
        />
        <Button title="Add" style={styles.button} onPress={() => this.add()}></Button>
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
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16
  }
})