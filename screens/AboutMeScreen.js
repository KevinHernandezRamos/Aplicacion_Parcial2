import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AboutMeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre Mí</Text>
      <Text style={styles.text}>
        Soy estudiante de la UTD y un apasionado por la programación.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FoodFav")}
      >
        <Text style={styles.buttonText}>Mis Comidas Favoritas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MoviesFav")}
      >
        <Text style={styles.buttonText}>Mis Películas Favoritas</Text>
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
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: "#38bdf8",
    marginBottom: 20,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6366f1",
    padding: 15,
    width: 240,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "#ef4444",
    padding: 15,
    width: 240,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});