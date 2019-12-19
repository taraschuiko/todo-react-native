import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Item, Input } from "native-base";

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
        <Item style={styles.textInput}>
          <Input
            value={this.state.name}
            onChangeText={(text) => this.handleNameChange(text)}
            onSubmitEditing={() => this.add()}
          ></Input>
        </Item>
        <Button onPress={() => this.add()}>
          <Text>Add</Text>
        </Button>
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
    marginRight: 8
  }
})