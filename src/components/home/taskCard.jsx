//import liraries

import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {TASKDETAIL} from '../../utils/routes';
// create a component
const TaskCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(TASKDETAIL)}>
      <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
        {item?.title}
      </Text>
      <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
        {item?.description}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
            {moment(item.startDate).format('DD/MM/YYYY')} -
            {moment(item.endDate).format('DD/MM/YYYY')}
          </Text>
        </View>
        {/* <View style={{flex: 1}}><Text>{item.category}</Text></View> */}
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
});

//make this component available to the app
export default TaskCard;
