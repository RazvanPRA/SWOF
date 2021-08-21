import React from 'react';
import {StyleSheet, View} from 'react-native';
import Week from './Week';
import {Calendar} from '../Const/Calendar';

const ContentCalendar = () => {
  return (
    <View style={styles.content}>
      {Calendar.map((item) => {
        return <Week week={item.week} dailySupport={item.dailySupport} />;
      })}
    </View>
  );
};

export default ContentCalendar;

const styles = StyleSheet.create({
  content: {
    marginTop: 45,
  },
});
