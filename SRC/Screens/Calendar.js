import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ContentCalendar from '../Components/ContentCalendar';
import HeaderContent from '../Components/HeaderContent';
import {COLORS} from '../Const/COLORS';

const Calendar = ({navigation}) => {
  return (
    <ScrollView style={styles.content}>
      <HeaderContent
        navigation={navigation}
        screen={'SWOF'}
        headerName={'Calendar'}
      />
      <ContentCalendar />
    </ScrollView>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  content: {backgroundColor: COLORS.background},
});
