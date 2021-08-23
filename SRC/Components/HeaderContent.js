import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {COLORS} from '../Const/COLORS';

const HeaderContent = ({headerName, screen, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{headerName}</Text>
      <Pressable
        onPress={() => {
          navigation.navigate(screen);
        }}>
        <Icon name="plus" color={COLORS.textYellow} style={styles.icon} />
      </Pressable>
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
    color: COLORS.textYellow,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
