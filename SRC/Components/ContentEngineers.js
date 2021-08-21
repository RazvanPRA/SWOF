import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Engineers} from '../Const/Engineers';
import IconO from 'react-native-vector-icons/Octicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../Const/COLORS';

const ContentEngineers = () => {
  return (
    <View style={styles.content}>
      {Engineers.map((item) => {
        return (
          <View style={styles.container}>
            <IconO
              name="chevron-right"
              color={COLORS.BLACK}
              style={styles.iconChevron}
            />
            <Text onPress={() => {}} style={styles.textButtom}>
              {item.name}
            </Text>
            <IconFA
              name="trash-o"
              color={COLORS.RedButtom}
              style={styles.iconTrash}
            />
          </View>
        );
      })}
    </View>
  );
};

export default ContentEngineers;

const styles = StyleSheet.create({
  content: {marginTop: 45},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.NormalButtom,
    marginBottom: 30,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  iconChevron: {
    fontSize: 40,
    paddingLeft: 15,
  },
  textButtom: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.TextGrey,
    paddingVertical: 10,
  },
  iconTrash: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingRight: 15,
  },
});
