import React, { Component } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";


class App extends Component {
  // Array de objetos com os dados das saladas
  saladas = [
    {
      id: "1",
      categoria: "Salada Clássica",
      nome: "Salada Waldorf",
      receita: `
        1/4 de xícara de chá de iogurte natural
        1/4 de xícara de chá de maionese
        Suco de 1 limão
        Sal e pimenta-do-reino a gosto
        1 cacho de uva sem semente e cortadas ao meio
        1 talo de salsão picado
        2 maçãs verdes ou vermelhas em cubos
        1/2 xícara de chá de nozes tostadas
        Folhas de alface a gosto
      `,
      imagem: "https://i.pinimg.com/736x/1b/a2/b6/1ba2b6271f63c759ad6f38d5d9fc13e7.jpg",
    },
    {
      id: "2",
      categoria: "Salada Refrescante",
      nome: "Salada Caesar",
      receita: `
        1 pé de alface romana
        1/2 xícara de queijo parmesão ralado
        1 xícara de croutons
        Molho Caesar a gosto
        1 peito de frango grelhado e fatiado
      `,
      imagem: "https://i.pinimg.com/736x/fb/17/c3/fb17c3b4b78fcc80ca3d5408c46b7139.jpg",
    },
  ];

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>SALADAS</Text>

        <FlatList
          data={this.saladas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.imagem }} style={styles.imagem} />
              <Text style={styles.texto}>
                <Text style={styles.marca}>Salada - {item.categoria}</Text>
                {"\n"}Nome: {item.nome}
                {"\n"}Receita: {item.receita}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

// 🎨 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#213435",
  },
  titulo: {
    fontSize: 22,
    fontFamily: "Merriweather",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#e2dec5",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: "row", // Alinha imagem e texto lado a lado
    alignItems: "center", // Centraliza verticalmente
  },

  imagem: {
    width: "200",
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1, // Ocupa o restante do espaço
  },
  texto: {
    fontSize: 16,
    fontFamily: "Indie Flower",
    marginTop: 5,
  },
  marca: {
    fontWeight: "bold",
  },
});

export default App;
