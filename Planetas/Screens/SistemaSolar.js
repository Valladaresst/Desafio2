import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

const fetchData = async (category) => {
  try {
    const response = await axios.get('https://mocki.io/v1/8c814a1d-0f6d-42fb-ab8b-21aab8559457');
    return response.data[category] || [];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.nombre}</Text>
    <Text>Tipo: {item.tipo}</Text>
    <Text>Masa: {item.masa}</Text>
    <Text>Radio: {item.radio}</Text>
    <Text>Distancia al Sol: {item.distancia_media_al_sol}</Text>
    <Text>Periodo de Rotación: {item.periodo_de_rotacion}</Text>
  </View>
);

const SistemaSolar = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchDataAsync = async () => {
      const solarSystemData = await fetchData('sistema_solar');
      setData(solarSystemData);
    };

    fetchDataAsync();
  }, []);

  const filteredData = data ? data.filter(item => item.nombre.toLowerCase().includes(searchQuery.toLowerCase())) : [];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        onRefresh={() => fetchData('sistema_solar')}
        refreshing={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default SistemaSolar;
