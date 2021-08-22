import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ContentEngineers from '../Components/ContentEngineers';
import HeaderContent from '../Components/HeaderContent';
import {COLORS} from '../Const/COLORS';

const AllEngineersScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.content}>
      <HeaderContent
        navigation={navigation}
        screen={'EngineerScreen'}
        headerName={'Engineers'}
      />
      <ContentEngineers />
    </ScrollView>
  );
};

export default AllEngineersScreen;

const styles = StyleSheet.create({
  content: {backgroundColor: COLORS.Background},
});
