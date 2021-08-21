import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Calendar from './Calendar';
import AllEngineersScreen from './AllEngineersScreen';
import {COLORS} from '../Const/COLORS';

const Tab = createMaterialBottomTabNavigator();
const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: 'Calendar',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home"
              color={COLORS.TextYellow}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen name="AllEngineersScreen" component={AllEngineersScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;

const styles = StyleSheet.create({});
