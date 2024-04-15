import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import {Input, Button, Radio, RadioGroup} from '@ui-kitten/components';
import * as Yup from 'yup';
import CustomDatePicker from '../../components/uı/customDatePicker';
import {taskSchema} from '../../utils/validations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {status} from '../../utils/constants';
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'


const AddTask = () => {
  const saveTask = async newTask => {
    try {
      const savedTasks = await AsyncStorage.getItem('@tasks');
      const updatedTasks = savedTasks ? JSON.parse(savedTasks) : [];
      updatedTasks.push(newTask);
      await AsyncStorage.setItem('@tasks', JSON.stringify(updatedTasks));
      console.log('Task saved successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          id: uuid(),
          title: '',
          description: '',
          startDate: null,
          endDate: null,
          category: null,
          status: status.ONGOING,
        }}
        validationSchema={taskSchema}
        onSubmit={x => saveTask(x)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          setFieldValue,
          errors,
        }) => (
          <View>
            <Input
              size="large"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              label={'Title'}
              placeholder="Please write your title"
              caption={errors.title}
              status={errors.title ? 'danger' : 'basic'}
            />
            <Input
              size="large"
              style={{marginTop: 10}}
              multiline
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              label={'Description'}
              placeholder="Please write your description"
              caption={errors.description}
              status={errors.description ? 'danger' : 'basic'}
            />
            <CustomDatePicker
              size="large"
              style={{marginTop: 10}}
              onSelect={date => setFieldValue('startDate', date)}
              date={values.startDate}
              label={'Start Date'}
              caption={errors.startDate}
              status={errors.startDate ? 'danger' : 'basic'}
            />
            <CustomDatePicker
              size="large"
              style={{marginTop: 10}}
              onSelect={date => setFieldValue('endDate', date)}
              date={values.endDate}
              label={'End Date'}
              caption={errors.endDate}
              status={errors.endDate ? 'danger' : 'basic'}
            />

            <RadioGroup
              selectedIndex={values.category}
              onChange={index => setFieldValue('category', index)}>
              <Radio>Software</Radio>
              <Radio>Design</Radio>
              <Radio>Test</Radio>
            </RadioGroup>

            <Button style={{marginTop: 50}} onPress={handleSubmit}>
              ADD TASK
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
