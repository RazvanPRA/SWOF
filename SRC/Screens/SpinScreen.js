import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../Const/COLORS';
import {Engineers} from '../Const/Engineers';

const SpinScreen = ({route}) => {
  const {data, setData} = route.params;
  function shuffle(array) {
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
  }

  const createWeek = () => {
    setData([...data]);
  };
  return (
    <View style={styles.content}>
      <Pressable
        onPress={() => {
          const newEngineers = [...Engineers.name];
          shuffle(newEngineers);
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
