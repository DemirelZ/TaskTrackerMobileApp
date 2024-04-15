import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TaskDetail = ({route}) => {
  console.log(route?.props);
  return (
    <View>
      <Text>TaskDetail</Text>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({});
