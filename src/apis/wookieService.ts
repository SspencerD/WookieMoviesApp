/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import createDecorator from '../types/decorators';
import {GET} from '../utils/axios-provider';
const URL: string = 'https://wookie.codesubmit.io/';

const headers = {
  Authorization: 'Bearer Wookie2019',
};

export const callServiceMovies = async () => {
  try {
    const response = await GET(`${URL}movies`, undefined, headers);
    return response;
  } catch (error) {
    console.error('Hubo un error al llamar al servicio de peliculas: ', error);
  }
};

export const callServicesMoviesWithParams = async (
  params: Record<string, any>,
) => {
  try {
    const response = await GET(`${URL}movies?q=`, params, headers);
    return response;
  } catch (error) {
    console.error(
      'Hubo un error al llamar al servicio de peliculas con  busqueda ',
      error,
    );
  }
};
