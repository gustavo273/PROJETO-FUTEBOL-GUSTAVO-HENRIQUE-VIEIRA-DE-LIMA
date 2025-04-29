import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function EstadioCard({ estadio }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: estadio.imagem }} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.nome}>{estadio.nome}</Text>
        <Text style={styles.texto}>Cidade: {estadio.cidade}</Text>
        <Text style={styles.texto}>Capacidade: {estadio.capacidade.toLocaleString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  imagem: {
    width: 150,
    height: 170,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  texto: {
    fontSize: 15,
    color: '#555',
  },
});
