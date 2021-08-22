import React from 'react';
import {StyleSheet, View} from 'react-native';
import Week from './Week';

const ContentCalendar = ({weeksSupport, storeCalendar}) => {
  return (
    <View style={styles.content}>
      {weeksSupport.map((item, index) => {
        return (
          <Week
            storeCalendar={storeCalendar}
            week={item.week}
            dailySupport={item.dailySupport}
            calendar={weeksSupport}
            index={index}
          />
        );
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
