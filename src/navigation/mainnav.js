import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Test from '../screens/test';
import Success from '../screens/success';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode={false}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
};

export default HomeStack;