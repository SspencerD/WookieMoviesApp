/* eslint-disable react/no-unstable-nested-components */
import {Animated, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import HomeScreen from '../src/screens/home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntD from 'react-native-vector-icons/AntDesign';
import DetailScreen from '../src/screens/details/detailScreen';
import CustomIcon from '../src/components/CustomIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          tabBarButton: (props: any) => (
            <CustomIcon
              {...props}
              iconName={'home'}
              label="Home"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          ),
          tabBarBackground() {
            return <View className="flex-1 w-full bg-black "></View>;
          },
        })}
      />
      <Tab.Screen
        name="Search"
        component={DetailScreen}
        options={({navigation}) => ({
          tabBarLabel: 'Search',
          tabBarButton: (props: any) => (
            <CustomIcon
              {...props}
              iconName={'search1'}
              label="Search"
              onPress={() => {
                navigation.navigate('Home', {openModal: true});
              }}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
