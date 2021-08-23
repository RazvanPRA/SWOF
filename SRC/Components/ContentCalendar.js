import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Week from './Week';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const ContentCalendar = () => {
  const [calendar, setCalendar] = useState([]);
  const isFocused = useIsFocused();
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
    if (isFocused) {
      loadCalendar();
    }
  }, [isFocused]);
  console.log({calendar});
  return (
    <View style={styles.content}>
      {calendar.map((item) => {
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
