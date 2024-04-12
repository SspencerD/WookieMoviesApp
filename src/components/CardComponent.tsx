import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Movie} from '../global';

const CardComponent = (props: Movie) => {
  const navigation = useNavigation();

  const handleItemPress = (item: any) => {
    navigation.navigate('Details', {movie: item});
  };
  return (
    <TouchableOpacity
      className="flex-1 p-2 "
      onPress={() => {
        handleItemPress(props);
      }}>
      <Image
        className="w-[100] h-[170] rounded-md object-cover m-2"
        source={{
          uri: props.poster,
        }}
      />
    </TouchableOpacity>
  );
};

export default CardComponent;
