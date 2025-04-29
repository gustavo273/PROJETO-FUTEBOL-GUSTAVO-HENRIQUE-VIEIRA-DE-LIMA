import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function EstatisticasScreen() {
  const estatisticas = {
    totalPublico: 3404252,
    totalJogos: 64,
    totalGols: 172,
    totalCartoes: 301,
    totalCartoesAmarelos: 288,
    totalCartoesVermelhos: 13,
    totalEstadios: 8,
    totalSelecoes: 32,
    totalJogadores: 831,
  };

  const mediaGolsPorJogo = () => (estatisticas.totalGols / estatisticas.totalJogos).toFixed(2);
  const mediaPublicoPorJogo = () => (estatisticas.totalPublico / estatisticas.totalJogos).toFixed(0);
  const mediaCartoesPorJogo = () => (estatisticas.totalCartoes / estatisticas.totalJogos).toFixed(2);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Estatísticas da Copa do Mundo 2022</Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Total de Gols:</Text>
          <Text variant="bodyLarge">{estatisticas.totalGols}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Total de Jogos:</Text>
          <Text variant="bodyLarge">{estatisticas.totalJogos}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Total de Público:</Text>
          <Text variant="bodyLarge">{estatisticas.totalPublico.toLocaleString()} pessoas</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Média de Gols por Jogo:</Text>
          <Text variant="bodyLarge">{mediaGolsPorJogo()}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Média de Público por Jogo:</Text>
          <Text variant="bodyLarge">{Number(mediaPublicoPorJogo()).toLocaleString()} pessoas</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Média de Cartões por Jogo:</Text>
          <Text variant="bodyLarge">{mediaCartoesPorJogo()}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
  },
});
