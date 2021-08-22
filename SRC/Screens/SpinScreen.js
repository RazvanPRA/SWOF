import React, {useState, useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../Const/COLORS';
import {Engineers} from '../Const/Engineers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SpinScreen = ({route}) => {
  const [calendar, setCalendar] = useState([]);
  console.log({calendar});
  const shufflArray = (array) => {
    var currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };
  const generateCalendar = async () => {
    let shuffledEngineers = shufflArray(Engineers);

    let week = {
      id: 100,
      week: calendar.length + 1,
      days: [
        {day: 'Monday', shifts: []},
        {day: 'Tuesday', shifts: []},
        {day: 'Wednesday', shifts: []},
        {day: 'Monday', shifts: []},
        {day: 'Monday', shifts: []},
      ],
    };

    const shifts = [];

    for (let i = 0; i < shuffledEngineers.length; i += 2) {
      const shiftEngineers = [
        shuffledEngineers[i].id,
        shuffledEngineers[i + 1].id,
      ];
      shifts.push(shiftEngineers);
      console.log({shifts});
    }
    for (let i = 0; i < shifts.length; i += 1) {
      week.days[i].shifts = shifts[i];
    }

    try {
      const jsonValue = JSON.stringify([...calendar, week]);
      await AsyncStorage.setItem('calendar', jsonValue);
    } catch (e) {}
  };
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
  return (
    <View style={styles.content}>
      <Pressable
        onPress={() => {
          generateCalendar();
        }}
        style={styles.container}>
        <Text style={styles.text}>SPIN</Text>
      </Pressable>
    </View>
  );
};

export default SpinScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: COLORS.Background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: COLORS.RedButtom,
    height: 125,
    aspectRatio: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.TextYellow,
  },
});
