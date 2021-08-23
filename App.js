import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppTabs from './SRC/Screens/AppTabs';
import SpinScreen from './SRC/Screens/SpinScreen';
import {COLORS} from './SRC/Const/COLORS';
import EngineerProfile from './SRC/Screens/EngineerProfile';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppTabs">
        <Stack.Screen
          name="AppTabs"
          component={AppTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SWOF"
          component={SpinScreen}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 36,
              fontWeight: 'bold',
              color: COLORS.textYellow,
            },
            headerStyle: {
              backgroundColor: COLORS.background,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="Engineer Profile"
          component={EngineerProfile}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 36,
              fontWeight: 'bold',
              color: COLORS.textYellow,
            },
            headerStyle: {
              backgroundColor: COLORS.background,
              elevation: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
