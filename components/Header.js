import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <Text style={styles.title}>{Constants.manifest.name}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#ccc',
    alignItems: 'center'
  },
  container: {
    padding: 10
  },
  title: {
    fontSize: 22
  }
});