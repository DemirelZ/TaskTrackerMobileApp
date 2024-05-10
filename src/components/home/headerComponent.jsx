import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
  ArrowCircleRight2,
} from 'iconsax-react-native';
import AppColors from '../../theme/colors';

const HeaderComponent = ({Ongoing, Pending, Complated, Cancel}) => {
  const boxes = [
    {
      id: 1,
      title: 'Ongoing',
      icon: <ChartCircle size="32" color={AppColors.WHITE} />,
      color: AppColors.ONGOING,
      count: Ongoing,
    },
    {
      id: 2,
      title: 'Pending',
      icon: <Clock size="32" color={AppColors.WHITE} />,
      color: AppColors.PENDING,
      count: Pending,
    },
    {
      id: 3,
      title: 'Complated',
      icon: <TickCircle size="32" color={AppColors.WHITE} />,
      color: AppColors.COMPLATED,
      count: Complated,
    },
    {
      id: 4,
      title: 'Cancel',
      icon: <CloseCircle size="32" color={AppColors.WHITE} />,
      color: AppColors.CANCEL,
      count: Cancel,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <Pressable
        style={{
          backgroundColor: item.color,
          width: '45%',
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}>
        {item.icon}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{color: AppColors.WHITE, fontSize: 18, fontWeight: '600'}}>
              {item.title}
            </Text>
            <Text
              style={{color: AppColors.WHITE, fontSize: 20, fontWeight: '600'}}>
              {item.count} Task
            </Text>
          </View>
          <View>
            <ArrowCircleRight2 size="24" color={AppColors.WHITE} />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList numColumns={2} data={boxes} renderItem={renderItem} />
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            margin: 10,
            marginHorizontal: 20,
          }}>
          All Tasks
        </Text>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({});
