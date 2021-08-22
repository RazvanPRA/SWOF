import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Week from './Week';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContentCalendar = ({weeksSupport, storeCalendar, setWeeksSupport}) => {
  const [calendar, setCalendar] = useState([]);
  const loadCalendar = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem('calendar');

      if (jsonValue !== null) {
        setCalendar(JSON.parse(jsonValue));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadCalendar();
  }, []);
  console.log({calendar});
  return (
    <View style={styles.content}>
      {calendar.map((item, index) => {
        return <Week week={item} key={item.id} />;
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
