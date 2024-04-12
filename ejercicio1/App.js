import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './SRC/Inicio';
import Registro from './SRC/Registro';
import MostrarEvento from './SRC/Mostrar';
import EditarEvento from './SRC/EditarE';
import Evento from './SRC/Evento';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Evento" component={Evento} />
        <Stack.Screen name="MostrarEvento" component={MostrarEvento} />
        <Stack.Screen name="EditarEvento" component={EditarEvento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;