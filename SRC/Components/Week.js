import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconO from 'react-native-vector-icons/Octicons';
import {COLORS} from '../Const/COLORS';
import {Engineers} from '../Const/Engineers';

const Week = ({week}) => {
  const [showWeek, setShowWeek] = useState(false);
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Text
          onPress={() => {
            setShowWeek(!showWeek);
          }}
          style={styles.textButtom}>
          Week {week.week}
        </Text>
        <IconO
          name="chevron-down"
          color={COLORS.black}
          style={styles.iconChevron}
          onPress={() => {
            setShowWeek(!showWeek);
          }}
        />
      </View>
      {showWeek &&
        week.days.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.textWeek}>{item.day}:</Text>
              <Text style={styles.textEngineerSupp}>
                Morning{' '}
                <IconO
                  name="arrow-small-right"
                  color={COLORS.textGrey}
                  style={styles.iconArrow}
                />{' '}
                {
                  Engineers.find((eng) => {
                    return eng.id === item.shifts[0];
                  }).name
                }
              </Text>
              <Text style={styles.textEngineerSupp}>
                Afternoon{'  '}
                <IconO
                  name="arrow-small-right"
                  color={COLORS.textGrey}
                  style={styles.iconArrow}
                />{' '}
                {
                  Engineers.find((eng) => {
                    return eng.id === item.shifts[1];
                  }).name
                }
              </Text>
            </View>
          );
        })}
    </View>
  );
};

export default Week;

const styles = StyleSheet.create({
  content: {
    marginBottom: 30,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.normalButton,

    marginHorizontal: 10,
    borderRadius: 10,
  },
  iconChevron: {
    fontSize: 22,
    paddingRight: 15,
  },
  textButtom: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textYellow,
    paddingVertical: 10,
    paddingLeft: 25,
  },
  textWeek: {
    paddingLeft: 10,
    color: COLORS.textGrey,
    fontSize: 18,
  },
  textEngineerSupp: {
    paddingLeft: 40,
    color: COLORS.textGrey,
    fontSize: 18,
  },
  iconArrow: {
    fontSize: 30,
  },
});
