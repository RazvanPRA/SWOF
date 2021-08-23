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
    <Tab.Navigator
      barStyle={{
        backgroundColor: COLORS.normalButton,
      }}>
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          title: 'Calendar',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="calendar"
              color={COLORS.textGrey}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Engineers"
        options={{
          title: 'Engineers',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="face-profile"
              color={COLORS.textGrey}
              size={26}
            />
          ),
        }}
        component={AllEngineersScreen}
      />
    </Tab.Navigator>
  );
};

export default AppTabs;

const styles = StyleSheet.create({});
