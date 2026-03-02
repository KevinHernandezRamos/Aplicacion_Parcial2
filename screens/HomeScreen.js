import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Kevin Ramos</Text>
      <Text style={styles.info}>Desarrollo de Software</Text>
      <Text style={styles.info}>5° Cuatrimestre</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ExampleEvent", { nombre: "Kevin Ramos" })}
      >
        <Text style={styles.buttonText}>Ir a ExampleEvent</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Counter")}
      >
        <Text style={styles.buttonText}>Ir a Counter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AboutMe")}
      >
        <Text style={styles.buttonText}>Sobre Mí</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#38bdf8",
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    color: "white",
    marginBottom: 5,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    width: 250,
    borderRadius: 12,
    marginTop: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});