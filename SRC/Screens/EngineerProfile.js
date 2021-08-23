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
      </View>
    </ScrollView>
  );
};

export default EngineerProfile;

const styles = StyleSheet.create({
  content: {flex: 1, backgroundColor: COLORS.background},
  contentScrollView: {alignItems: 'center', paddingTop: 44},
  contentText: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 36,
    backgroundColor: COLORS.normalButton,
    margin: 30,
    textAlign: 'center',
    minWidth: 120,
    minHeight: 65,
    color: COLORS.textYellow,
    fontWeight: 'bold',
    paddingTop: 6,
  },
  textName: {
    fontSize: 36,
    backgroundColor: COLORS.normalButton,
    margin: 30,
    textAlign: 'center',
    minWidth: 300,
    minHeight: 65,
    color: COLORS.textYellow,
    fontWeight: 'bold',
    paddingTop: 6,
  },
  textWorking: {
    fontSize: 18,
    color: COLORS.black,
  },
  viewWeek: {
    paddingLeft: 20,
  },
});
