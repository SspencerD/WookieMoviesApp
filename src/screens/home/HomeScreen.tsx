/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  callServiceMovies,
  callServicesMoviesWithParams,
} from '../../apis/wookieService';
import {Movie} from '../../global';
import useMovieStore from '../../store/movieStore';
import CardComponent from '../../components/CardComponent';
import HomeCategories from '../../components/HomeCategories';
import LogoComponent from '../../components/LogoComponent';
import SplashLoading from '../../components/SplashLoading';
import Antd from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = (props: any) => {
  console.log('que trae props en HOME?', props);
  const navigation = useNavigation();
  const [query, setQuery] = useState<string>('');
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [moviesCategorized, setMoviesCategorized] = useState<any>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = () => {
    callServiceMovies()
      .then((resp: Movie) => {
        if (resp) {
          // console.log('Recupero las peliculas', resp);
          const movies: any = resp.movies;
          useMovieStore.getState().addMovies(movies);
          setAllMovies(movies);
          // Objeto para almacenar las películas agrupadas por género
          const groupedMovies: Record<string, Movie[]> = {};

          // Filtrar y agrupar las películas por género
          movies.forEach((mov: any) => {
            mov.genres.forEach((gen: any) => {
              if (!groupedMovies[gen]) {
                groupedMovies[gen] = [];
              }
              groupedMovies[gen].push(mov);
            });
          });
          setMoviesCategorized(groupedMovies);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        console.error('Hubo un error', err);
      });
  };

  const getMovieByName = (name: String) => {
    callServicesMoviesWithParams(name)
      .then((resp: Movie) => {
        if (resp !== undefined) {
          console.log('que trae la respuesta?', resp);
        }
      })
      .catch((err: Error) => {
        console.error('ERROR! =>  hubo un error al consultar con params', err);
      });
  };

  const mostPopularMovies = allMovies.filter(
    (pop: any) => pop.imdb_rating >= 8,
  );
  return loading ? (
    <SplashLoading />
  ) : (
    <>
      <View className="flex-1 bg-[#0e0d0f]">
        <LogoComponent />
        <View className="justify-start w-full bg-[#0e0d0f] mt-[10%]">
          <Text className="text-base text-left text-white font-openSansBold">
            {' '}
            Popular on Wookieflix
          </Text>
          <FlatList
            data={mostPopularMovies}
            renderItem={({item}) => <CardComponent {...item} />}
            horizontal
          />
        </View>
        <View className="  justify-start w-full bg-[#0e0d0f] px-1">
          <Text className="my-3 text-lg text-white font-openSansBold">
            Categories
          </Text>
          <FlatList
            data={Object.keys(moviesCategorized)}
            renderItem={({item}) => {
              return (
                <HomeCategories
                  data={moviesCategorized[item]}
                  categoryName={item}
                />
              );
            }}
            keyExtractor={item => item}
          />
        </View>
      </View>
      <View className="items-center justify-center flex-1 bg-[rgba(0,0,0,0.35)]">
        <Modal
          visible={props.route?.params?.openModal ?? false}
          animationType="slide"
          transparent>
          <View className="w-full mt-3 bg-white rounded-sm h-1/2">
            <TouchableOpacity
              className="items-end justify-center w-full mt-3 mr-3"
              onPress={() => {
                navigation.navigate('Home', {openModal: false});
              }}>
              <Antd name="close" size={30} color={'black'} />
            </TouchableOpacity>
            <TextInput
              value={query}
              onChangeText={e => {
                setQuery(e);
              }}
            />
          </View>
        </Modal>
      </View>
    </>
  );
};

export default HomeScreen;
