import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <View style={styles.background}>
      <View style={styles.phoneFrame}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  phoneFrame: {
    width: 390,          
    height: 710,         
    backgroundColor: "white",
    borderRadius: 40,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "black",
  },
});