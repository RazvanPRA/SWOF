import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {COLORS} from '../Const/COLORS';

const HeaderContent = ({headerName}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{headerName}</Text>
      <Icon name="plus" color={COLORS.TextYellow} style={styles.icon} />
    </View>
  );
};

export default HeaderContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    paddingLeft: 50,
    fontSize: 36,
    color: COLORS.TextYellow,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
