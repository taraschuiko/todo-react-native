import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "./components/Header";

export default class App extends React.Component {
  state = {
    todos: [
      {
        id: 349534,
        name: "Buy water",
        completed: false
      },
      {
        id: 348234,
        name: "Buy bread",
        completed: false
      }
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
