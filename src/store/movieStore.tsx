import {create} from 'zustand';
import {Movie} from '../global';

type State = {
  movies: Movie[];
  addMovies: (movies: Movie[]) => void;
};

const useMovieStore = create<State>(set => ({
  movies: [],
  addMovies: movies => set({movies}),
}));

export default useMovieStore;
