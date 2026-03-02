import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";

export default function MoviesFavScreen({ navigation }) {

  const movies = [
    {
      title: "Need for Speed",
      uri: "https://www.redusers.com/noticias/wp-content/uploads/2014/03/Need-for-Speed-UK-Quad-Poster-600x450.jpg"
    },
    {
      title: "Rápidos y Furiosos 5",
      uri: "https://www.mundiario.com/asset/thumbnail,1280,720,center,center/media/cineseries/images/2023/05/07/2023050708524469575.png"
    },
    {
      title: "Ted 2",
      uri: "https://m.media-amazon.com/images/S/pv-target-images/82c780f2f446fcfc77d38b3f7012e30eb4e41d5353411223cd929d5b25d8bb45.jpg"
    },
    {
      title: "Chiquito pero peligroso",
      uri: "https://m.media-amazon.com/images/M/MV5BMTI0NTA3MjI3NV5BMl5BanBnXkFtZTcwNTI1ODYzMQ@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      title: "Mi pobre angelito",
      uri: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/9f74cd84-efb5-43ee-aea4-4cac8b7c8545/compose?aspectRatio=1.78&format=webp&width=1200"
    },
    {
      title: "Mi pobre angelito 2",
      uri: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/9e68777d-ec6f-49d2-a34c-bd104e3ce5eb/compose?aspectRatio=1.78&format=webp&width=1200"
    },
    {
      title: "Son como niños 2",
      uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTawWF8OLdSup99zTX9X_a7vgKojBEGw4F9Bs4dVlsgHNLRaz1euv-B623A2x3jLYccenmAmfERAJKjV3hpXw07_v_FuOx_5QbyDuySYOCI9vrVBQhB7-f4emVPW5_y82ZR5LufULPhwML/s400/grown-ups-2-wallpaper-01.jpg"
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Películas Favoritas</Text>
      <Text style={styles.subHeader}>
        Peliculas que mas amo.
      </Text>

      {movies.map((item, index) => (
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
    backgroundColor: "#111827",
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#facc15",
    marginBottom: 10,
  },
  subHeader: {
    color: "#e5e7eb",
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
    backgroundColor: "rgba(0,0,0,0.6)",
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
    backgroundColor: "#ef4444",
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