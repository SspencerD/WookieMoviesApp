/* eslint-disable prettier/prettier */
import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  callServiceMovies,
  callServicesMoviesWithParams,
} from '../../apis/wookieService';
import {Movie} from '../../global';
import LogoW from '../../../assets/svg/WookieFlix.svg';
import useMovieStore from '../../store/movieStore';
import CardComponent from '../../components/CardComponent';
import HomeCategories from '../../components/HomeCategories';

const HomeScreen = () => {
  const [query, setQuery] = useState<string>('');
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [moviesCategorized, setMoviesCategorized] = useState<any>([]);

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = () => {
    callServiceMovies()
      .then((resp: Movie) => {
        if (resp) {
          // console.log('Recupero las peliculas', resp);
          const movies = resp.movies;
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
        }
      })
      .catch((err: Error) => {
        console.error('Hubo un error', err);
      });
  };

  const mostPopularMovies = allMovies.filter(
    (pop: any) => pop.imdb_rating >= 8,
  );
  return (
    <View className="flex-1 bg-black">
      <View className="flex-row items-start justify-center">
        <LogoW scaleX={0.5} scaleY={0.5} />
      </View>
      <View className="justify-start w-full bg-[#0e0d0f] mt-[10%]">
        <Text className="text-base text-left text-white font-openSansBold">
          {' '}
          Popular on Wookieflix
        </Text>
        <FlatList
          data={mostPopularMovies}
          renderItem={({item}) => (
            <CardComponent poster={item.poster} title={item.title} />
          )}
          horizontal
        />
      </View>
      <View className="justify-start w-full bg-[#992] mt-[10%]">
        <Text>hola</Text>
        <FlatList
          data={moviesCategorized[0]}
          renderItem={({item}) =>{ 
            console.log('Que devuelve ITEM?',item)
            return(
              <HomeCategories data={item}
              />
            )
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
