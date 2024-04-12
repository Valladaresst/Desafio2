import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'react-native';

import SistemaSolar from './Screens/SistemaSolar';
import Tierra from './Screens/Tierra';
import Sol from './Screens/sol';

enableScreens();

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Sistema Solar" component={SistemaSolar} />
          <Tab.Screen name="Tierra" component={Tierra} />
          <Tab.Screen name="Sol" component={Sol} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
