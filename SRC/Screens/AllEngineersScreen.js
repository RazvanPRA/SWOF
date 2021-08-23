import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import ContentEngineers from '../Components/ContentEngineers';
import {COLORS} from '../Const/COLORS';

const AllEngineersScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.content}>
      <View>
        <Text style={styles.text}>EngineerScreen</Text>
      </View>
      <ContentEngineers navigation={navigation} />
    </ScrollView>
  );
};

export default AllEngineersScreen;

const styles = StyleSheet.create({
  content: {backgroundColor: COLORS.background},
  text: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    paddingLeft: 50,
    fontSize: 36,
    color: COLORS.textYellow,
    fontWeight: 'bold',
  },
});
