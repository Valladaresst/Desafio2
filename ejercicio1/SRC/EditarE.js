import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditarEvento = ({ route, navigation }) => {
  const [nombreEvento, setNombreEvento] = useState('');
  const [lugarEvento, setLugarEvento] = useState('');
  const [descripcionEvento, setDescripcionEvento] = useState('');
  const [fechaEvento, setFechaEvento] = useState('');
  const [horaEvento, setHoraEvento] = useState('');

  useEffect(() => {
    if (route.params.evento) {
      const evento = route.params.evento;
      setNombreEvento(evento.nombre);
      setLugarEvento(evento.lugar);
      setDescripcionEvento(evento.descripcion);
      setFechaEvento(evento.fecha);
      setHoraEvento(evento.hora);
    }
  }, []);

  const guardarCambios = async () => {
    try {
      const eventoModificado = {
        nombre: nombreEvento,
        lugar: lugarEvento,
        descripcion: descripcionEvento,
        fecha: fechaEvento,
        hora: horaEvento,
      };
      await AsyncStorage.setItem('evento', JSON.stringify(eventoModificado));
      Alert.alert('Éxito', 'Evento modificado exitosamente correctamente');
      navigation.goBack();
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
      Alert.alert('Error', 'Ocurrió un error al guardar los cambios del evento nuevo');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Evento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de su Evento"
        value={nombreEvento}
        onChangeText={setNombreEvento}
      />
      <TextInput
        style={styles.input}
        placeholder="Lugar de su Evento"
        value={lugarEvento}
        onChangeText={setLugarEvento}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción de su evento"
        value={descripcionEvento}
        onChangeText={setDescripcionEvento}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de su evento"
        value={fechaEvento}
        onChangeText={setFechaEvento}
      />
      <TextInput
        style={styles.input}
        placeholder="Hora de su evento"
        value={horaEvento}
        onChangeText={setHoraEvento}
      />
      <TouchableOpacity style={styles.button} onPress={guardarCambios}>
        <Text style={styles.buttonText}>Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#41E4F1'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default EditarEvento;