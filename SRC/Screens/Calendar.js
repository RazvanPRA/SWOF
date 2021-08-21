import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ContentCalendar from '../Components/ContentCalendar';
import HeaderContent from '../Components/HeaderContent';
import {COLORS} from '../Const/COLORS';

const Calendar = () => {
  return (
    <ScrollView style={styles.content}>
      <HeaderContent headerName={'Calendar'} />
      <ContentCalendar />
    </ScrollView>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  content: {backgroundColor: COLORS.Background},
});
