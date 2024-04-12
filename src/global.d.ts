export interface Movie {
  backdrop: string;
  cast: string[];
  classification: string;
  director: string;
  genre: string[];
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  title: string;
}

export interface ApiResponse {
  movies: Movie[];
}
