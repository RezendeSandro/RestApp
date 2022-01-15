import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Buscar Estabelecimentos',
      cardStyle: { backgroundColor: '#fff' },
      headerStyle: { backgroundColor: '#7bbdd1' },
      headerTintColor: '#fff',
    },
  }
);

export default createAppContainer(navigator);