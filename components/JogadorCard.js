import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card, Text } from "react-native-paper";

export default function JogadorCard({ jogador }) {
  return (
    <Card style={styles.card}>
      <View style={styles.content}>
        <Image source={{ uri: jogador.imagem }} style={styles.imagem} />
        <View style={styles.info}>
          <Text style={styles.id}> {jogador.id}</Text>
          <Text style={styles.nome}>{jogador.nome}</Text>
          <Text style={styles.numero}>Número: {jogador.numero}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: "#f4f4f4",
  },
  content: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  imagem: {
    width: 100,
    height: 170,
    borderRadius: 40,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  numero: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },
  id: {
    fontSize: 15,
    color: 'black',
    marginTop: 4,
  },
});
