import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ContentCalendar from '../Components/ContentCalendar';
import HeaderContent from '../Components/HeaderContent';
import {COLORS} from '../Const/COLORS';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WeekSupport} from '../Const/WeekSupport';

const Calendar = () => {
  const [weeksSupport, setWeeksSupport] = useState(WeekSupport);
  const storeCalendar = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('storeCalendar', jsonValue);
    } catch (e) {}
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('storeCalendar');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {}
  };

  return (
    <ScrollView style={styles.content}>
      <HeaderContent headerName={'Calendar'} />
      <ContentCalendar
        weeksSupport={weeksSupport}
        storeCalendar={storeCalendar}
      />
    </ScrollView>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  content: {backgroundColor: COLORS.Background},
});
