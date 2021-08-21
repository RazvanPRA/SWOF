import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Calendar from './Calendar';
import AllEngineersScreen from './AllEngineersScreen';

const Tab = createMaterialBottomTabNavigator();
const AppTabs = () => {
  return (
    <Tab.Navigator
    //   tabBarOptions={{
    //     labelStyle: {fontSize: 18},
    //     tabStyle: {color: COLORS.primaryColor},
    //     style: {backgroundColor: COLORS.colorBackground},
    //     labelStyle: {color: COLORS.primaryColor},
    //     tabStyle: {height: 94},

    //   }}
    >
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: 'Calendar',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="AllEngineersScreen" component={AllEngineersScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;

const styles = StyleSheet.create({});
