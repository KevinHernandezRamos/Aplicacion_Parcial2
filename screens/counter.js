import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Counter({ navigation }) {

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>

      <Text style={styles.counter}>{count}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={styles.smallButton}
         onPress={() => setCount(prev => prev + 1)}
        >
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.smallButton}
          onPress={() => setCount(prev => prev - 1)}
        >
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.resetButton}
        onPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.sendButton}
        onPress={() => navigation.navigate("ExampleEvent", { total: count })}
      >
        <Text style={styles.buttonText}>Enviar total a ExampleEvent</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.homeButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Regresar a Home</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    color: "#fff",
    marginBottom: 20,
  },
  counter: {
    fontSize: 40,
    color: "#f1c40f",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#2C3e50",
  },
  smallButton: {
    backgroundColor: "#2980b9",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  resetButton: {
    backgroundColor: "#e74a3b",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: 200,
    alignItems: "center",
  },
  sendButton: {
    backgroundColor: "#9b59b6",
    padding: 15,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
    marginBottom: 15,
  },
  homeButton: {
    backgroundColor: "#1abc9c",
    padding: 15,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});