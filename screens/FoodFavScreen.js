import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";

export default function FoodFavScreen({ navigation }) {

  const foods = [
    {
      title: "Pizza",
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0-HmskFIOzX-o3_DTZdgLshMNluWvZpwAw&s"
    },
    {
      title: "Tacos",
      uri: "https://familiakitchen.com/wp-content/uploads/2021/01/iStock-960337396-3beef-barbacoa-tacos-e1695391119564.jpg"
    },
    {
      title: "Hamburguesa",
      uri: "https://www.burgerfi.com/wp-content/uploads/2025/01/classic-meat-burger-with-fries-scaled.webp"
    },
    {
      title: "Helado",
      uri: "https://i.ytimg.com/vi/Eu3O8OW6rQs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCJeqQgFIYpWowlZcVQAjVFWInRJQ"
    },
    {
      title: "Nuggets de Pollo",
      uri: "https://sarasellos.com/wp-content/uploads/2024/07/nuggets-pollo-1-1024x1024.jpg"
    },
    {
      title: "Sushi",
      uri: "https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/general/sushi-empanizado/main-header.jpg"
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Mis Comidas Favoritas</Text>
      <Text style={styles.subHeader}>
        Estos son los platillos que más disfruto.
      </Text>

      {foods.map((item, index) => (
        <View key={index} style={styles.card}>
          <ImageBackground
            source={{ uri: item.uri }}
            style={styles.image}
            imageStyle={{ borderRadius: 20 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          </ImageBackground>
        </View>
      ))}

      <TouchableOpacity
        style={styles.floatingButton}
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>⬅ Volver</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#0f172a",
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#38bdf8",
    marginBottom: 10,
  },
  subHeader: {
    color: "#ffffff",
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  card: {
    width: "100%",
    height: 220,
    marginBottom: 25,
    borderRadius: 20,
    elevation: 10,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  floatingButton: {
    marginTop: 20,
    backgroundColor: "#22c55e",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});