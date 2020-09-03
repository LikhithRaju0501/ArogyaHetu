import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Statewise from './src/screens/Statewise';
import StateDetails from './src/screens/StateDetails';
import UserLocation from './src/screens/UserLocation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'State') {
              iconName = 'chart-area';
            } else if (route.name === 'Details') {
              iconName = 'hospital-alt';
            } else if (route.name === 'Location') {
              iconName = 'location-arrow';
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={24} color='black' />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='State' component={Statewise} />
        <Tab.Screen name='Details' component={StateDetails} />
        <Tab.Screen name='Location' component={UserLocation} />
      </Tab.Navigator>
      {/* <Stack.Navigator>
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
});

export default App;
