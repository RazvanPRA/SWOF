import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Engineers} from '../Const/Engineers';
import IconO from 'react-native-vector-icons/Octicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../Const/COLORS';

const ContentEngineers = ({navigation}) => {
  return (
    <View style={styles.content}>
      {Engineers.map((item) => {
        return (
          <View key={item.id} style={styles.container}>
            <Text
              onPress={() => {
                navigation.navigate('Engineer Profile', {
                  data: item,
                });
              }}
              style={styles.textButtom}>
              {item.name}
            </Text>
            <IconO
              name="chevron-right"
              color={COLORS.black}
              style={styles.iconChevron}
              onPress={() => {
                navigation.navigate('Engineer Profile', {
                  data: item,
                });
              }}
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
    backgroundColor: COLORS.normalButton,
    marginBottom: 30,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  iconChevron: {
    fontSize: 40,
    paddingRight: 15,
  },
  textButtom: {
    flex: 1,
    paddingLeft: 10,
    alignSelf: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.textGrey,
    paddingVertical: 10,
  },
});
