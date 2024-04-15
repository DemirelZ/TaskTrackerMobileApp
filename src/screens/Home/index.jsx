import {FlatList, StyleSheet, RefreshControl, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FloatActionButton from '../../components/uı/floatActionButton';
import {ADDTASKS} from '../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from '../../components/home/taskCard';
import HeaderComponent from '../../components/home/headerComponent';

const Home = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [Ongoing, setOngoing] = useState(0);
  const [Pending, setPending] = useState(0);
  const [Complated, setComplated] = useState(0);
  const [Cancel, setCancel] = useState(0);

  const getTask = async () => {
    //let myTask = [];
    try {
      const res = await AsyncStorage.getItem('@tasks');

      if (res !== null) {
        const parsedTasks = JSON.parse(res);
        setTasks(parsedTasks);

        let comlatedCount = 0;
        let PendingCount = 0;
        let onGoingCount = 0;
        let CancelCount = 0;

        for (const task of parsedTasks) {
          if (task.status === 1) {
            onGoingCount++;
          }
          if (task.status === 2) {
            PendingCount++;
          }
          if (task.status === 3) {
            comlatedCount++;
          }
          if (task.status === 4) {
            CancelCount++;
          }
        }
        setComplated(comlatedCount);
        setOngoing(onGoingCount);
        setPending(PendingCount);
        setCancel(CancelCount);
      }

      //myTask.push(JSON.parse(task));
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getTask();
    setRefreshing(false);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <HeaderComponent
            Ongoing={Ongoing}
            Pending={Pending}
            Complated={Complated}
            Cancel={Cancel}
          />
        }
        data={tasks}
        renderItem={({item}) => <TaskCard item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
