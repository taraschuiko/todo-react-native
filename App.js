import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/todoReducer";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
});
