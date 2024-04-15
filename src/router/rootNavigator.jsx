import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import AddTask from '../screens/AddTask';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ADDTASKS, TASKS } from '../utils/routes';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TASKS} component={Home} />
      <Stack.Screen name={ADDTASKS} component={AddTask} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
