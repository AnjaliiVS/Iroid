import React from 'react';
import { View, Text } from 'react-native';
import HomeStack from './src/navigation/mainnav'
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
    return (
        <NavigationContainer >
            <HomeStack />
        </NavigationContainer>
    );
}

export default App;