import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppTabs from './SRC/Screens/AppTabs';
import EngineerScreen from './SRC/Screens/EngineerScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppTabs"
          component={AppTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="EngineerScreen" component={EngineerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
