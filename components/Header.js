import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, Text, Platform } from "react-native";

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
    padding: 16,
    paddingTop: Platform.OS === "android" ? 40 : 16
  },
  title: {
    fontSize: 22,
    fontWeight: '700'
  }
});