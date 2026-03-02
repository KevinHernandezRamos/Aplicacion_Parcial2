import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function ExampleEvent({ navigation, route }) {
  const nombre = route.params?.nombre;
  const total = route.params?.total;

  const mostrarAlerta = () => {
    Alert.alert(
      "Datos Recibidos",
      `Nombre: ${nombre ?? "No recibido"}\nContador: ${total ?? "No recibido"}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Eventos</Text>

      {nombre && <Text style={styles.text}>Nombre: {nombre}</Text>}
      {total !== undefined && <Text style={styles.text}>Contador: {total}</Text>}

      <TouchableOpacity style={styles.button} onPress={mostrarAlerta}>
        <Text style={styles.buttonText}>Mostrar Alert</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Volver a Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e293b",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    color: "#facc15",
    marginBottom: 20,
    fontWeight: "bold",
  },
  text: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
    fontWeight: bold,
  },
  button: {
    backgroundColor: "#22c55e",
    padding: 15,
    borderRadius: 10,
    width: 220,
    alignItems: "center",
    marginTop: 15,
  },
  backButton: {
    backgroundColor: "#ef4444",
    padding: 15,
    borderRadius: 10,
    width: 220,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});