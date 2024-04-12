//

import {AxiosRequestConfig, AxiosResponse} from 'axios';

const axios = require('axios').default;

type Params = string;
type Headers = Record<string, any>;

export function GET(
  url: string,
  params?: Params,
  headers?: Headers,
  config?: AxiosRequestConfig,
): Promise<any> {
  return axios({
    method: 'GET',
    url,
    params,
    headers,
    ...config,
    responseType: 'json',
  }).then((response: AxiosResponse<any>) => {
    return response.data;
  });
}

export function POST(
  url: string,
  params?: Params,
  headers?: Headers,
  config?: AxiosRequestConfig,
  data?: any,
): Promise<any> {
  return axios({
    method: 'POST',
    url,
    params,
    headers,
    data,
    responseType: 'json',
    ...config,
  }).then((response: AxiosResponse<any>) => {
    return response.data || response._response;
  });
}

export function PUT(
  url: string,
  params?: Params,
  headers?: Headers,
  config?: AxiosRequestConfig,
  data?: any,
) {
  return axios({
    method: 'PUT',
    url,
    params,
    headers,
    data,
    ...config,
  });
}

export function DELETE(
  url: string,
  params?: Params,
  headers?: Headers,
  config?: AxiosRequestConfig,
) {
  return axios({
    method: 'DELETE',
    url,
    params,
    headers,
    ...config,
  });
}

export function PATCH(
  url: string,
  params?: Params,
  headers?: Headers,
  config?: AxiosRequestConfig,
  data?: any,
) {
  return axios({
    method: 'PATCH',
    url,
    params,
    headers,
    data,
    ...config,
  });
}
