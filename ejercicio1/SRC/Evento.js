
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Evento = () => {
  const [nombreEvento, setNombreEvento] = useState('');
  const [lugarEvento, setLugarEvento] = useState('');
  const [descripcionEvento, setDescripcionEvento] = useState('');
  const [fechaEvento, setFechaEvento] = useState('');
  const [horaEvento, setHoraEvento] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    hideDatePicker();
    setFechaEvento(date.toDateString());
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (time) => {
    hideTimePicker();
    setHoraEvento(time.toLocaleTimeString());
  };

  const guardarEvento = async () => {
    try {
      
      const evento = {
        nombre: nombreEvento,
        lugar: lugarEvento,
        descripcion: descripcionEvento,
        fecha: fechaEvento,
        hora: horaEvento,
      };
      await AsyncStorage.setItem('evento', JSON.stringify(evento));
      Alert.alert('Éxito', 'Evento guardado correctamente');
    } catch (error) {
      console.error('Error al guardar el evento:', error);
      Alert.alert('Error', 'Ocurrió un error al guardar el evento');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Nuevo Evento</Text>
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
        placeholder="Descripción"
        value={descripcionEvento}
        onChangeText={setDescripcionEvento}
      />
      <TouchableOpacity style={styles.datePickerButton} onPress={showDatePicker}>
        <Text style={styles.buttonText}>Fecha: {fechaEvento}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.timePickerButton} onPress={showTimePicker}>
        <Text style={styles.buttonText}>Hora: {horaEvento}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={guardarEvento}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />
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
  datePickerButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  timePickerButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'red',
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

export default Evento;