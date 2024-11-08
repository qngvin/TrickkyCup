import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screen/HomeScreen';
import PlayScreen from '../screen/PlayScreen';
const Stack = createNativeStackNavigator();
const NavigatorUser: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Play" component={PlayScreen} />
    </Stack.Navigator>
  );
};

export default NavigatorUser;
