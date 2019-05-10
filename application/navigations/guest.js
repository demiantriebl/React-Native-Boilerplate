import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CounterScreen from '../screens/Counter';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const tabNav =  createBottomTabNavigator(
  {
    Counter: {
      screen: CounterScreen,
      navigationOptions: ({navigation}) => ({
        title: 'Contador',
        tabBarIcon: ({tintColor}) => {
          return <Ionicons name="md-calculator" size={25} color={tintColor} />;
        }
      })
    }
  }
)

export default createAppContainer(tabNav)