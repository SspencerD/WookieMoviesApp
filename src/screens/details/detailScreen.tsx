/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Movie} from '../../global';
import Antd from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import LogoW from '../../../assets/svg/WookieFlixArch.svg';
import StartsRating from '../../components/StarsRating';
import PosterInfoComponent from '../../components/PosterInfoComponent';

const DetailScreen = ({route}) => {
  const {movie} = route?.params;
  const navigation = useNavigation();
  const dataMovies: Movie = movie;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // El mes se indexa desde 0, por eso se suma 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  console.log('ME TRAJE LOS DATOS DE MOVIE', movie);
  return (
    <ScrollView className=" flex-1 bg-[#181818] px-3">
      <ImageBackground
        source={{uri: dataMovies.backdrop}}
        resizeMode="cover"
        className="h-[250] w-full blur-md opacity-40">
        <View className="flex-row justify-start w-full px-3 mt-2">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="mx-3 ">
            <Antd name="arrowleft" size={32} color={'white'} />
          </TouchableOpacity>
          <View className="items-start justify-start">
            <LogoW
              style={{
                position: 'relative',
                width: 80,
                aspectRatio: 0.5,
                bottom: '40%',
                left: '90%',
              }}
            />
          </View>
        </View>
      </ImageBackground>
      <View className="flex-col w-full ">
        <PosterInfoComponent
          title={dataMovies.title}
          poster={dataMovies.poster}
          imdb_rating={dataMovies.imdb_rating}
        />
        <View className="flex-row flex-wrap items-start justify-between w-full bottom-10 ">
          <Text className="text-base text-justify text-white font-openSansSemiBold">
            Date: {formatDate(dataMovies.released_on)}
          </Text>
          <Text className="pb-5 text-base text-justify text-white font-openSansSemiBold">
            Length: {dataMovies.length}
          </Text>
          <Text className="text-base text-justify text-white font-openSansSemiBold">
            Director: {dataMovies.director}
          </Text>
        </View>
        <View className="justify-start w-full mt-8 ">
          <Text className="justify-center text-lg text-center text-white font-openSansBold">
            Cast
          </Text>
          {dataMovies.cast.map((cas: string) => (
            <View className="flex-row items-center justify-start my-2">
              <Entypo name="dot-single" size={20} color={'#ffffff'} />
              <Text className="text-justify text-white text-md font-openSansBold">
                {cas}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View>
        <Text className="justify-center mb-3 text-lg text-center text-white font-openSansBold">
          Overview
        </Text>
      </View>
      <ScrollView>
        <Text className="text-sm text-justify text-white font-openSans">
          {dataMovies.overview}
        </Text>
      </ScrollView>
    </ScrollView>
  );
};

export default DetailScreen;
