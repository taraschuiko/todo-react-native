import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/todoReducer";

import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'

import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const persistConfig = {
  key: "todos",
  storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <Header />
            <TodoList />
          </View>
        </PersistGate>
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
