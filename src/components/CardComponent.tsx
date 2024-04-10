import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  poster: string;
  title: string;
}

const CardComponent = (props: Props) => {
  return (
    <View className="flex-1 p-2 ">
      <Image
        className="w-[100] h-[170] rounded-md object-cover m-2"
        source={{
          uri: props.poster,
        }}
      />
    </View>
  );
};

export default CardComponent;
