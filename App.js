import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppTabs from './SRC/Screens/AppTabs';
import EngineerScreen from './SRC/Screens/EngineerScreen';
import SpinScreen from './SRC/Screens/SpinScreen';
import {COLORS} from './SRC/Const/COLORS';

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
              color: COLORS.TextYellow,
            },
            headerStyle: {
              backgroundColor: COLORS.Background,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen name="EngineerScreen" component={EngineerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
