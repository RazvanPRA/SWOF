import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../Const/COLORS';

const EngineerProfile = ({route}) => {
  const {data} = route.params;
  return (
    <ScrollView
      style={styles.content}
      contentContainerStyle={styles.contentScrollView}>
      <View style={styles.container}>
        <View style={styles.contentText}>
          <Text style={styles.textName}>{data.name}</Text>
        </View>
        <View style={styles.contentText}>
          <Text style={styles.text}>{data.gender}</Text>
          <Text style={styles.text}>{data.age}</Text>
        </View>
        <Text style={styles.textWorking}>Working schedule:</Text>
        <View style={styles.viewWeek}>
          <Text style={styles.textWorking}>Week 1 - Monday - Evening</Text>
          <Text style={styles.textWorking}>Week 2 - Friday - Morning</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default EngineerProfile;

const styles = StyleSheet.create({
  content: {flex: 1, backgroundColor: COLORS.Background},
  contentScrollView: {alignItems: 'center', paddingTop: 44},
  contentText: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 36,
    backgroundColor: COLORS.NormalButtom,
    margin: 30,
    textAlign: 'center',
    width: 120,
    height: 65,
    color: COLORS.TextYellow,
    fontWeight: 'bold',
    paddingTop: 6,
  },
  textName: {
    fontSize: 36,
    backgroundColor: COLORS.NormalButtom,
    margin: 30,
    textAlign: 'center',
    width: 300,
    height: 65,
    color: COLORS.TextYellow,
    fontWeight: 'bold',
    paddingTop: 6,
  },
  textWorking: {
    fontSize: 18,
    color: COLORS.BLACK,
  },
  viewWeek: {
    paddingLeft: 20,
  },
});
