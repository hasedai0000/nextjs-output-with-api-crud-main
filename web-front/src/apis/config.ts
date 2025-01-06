import axios, { AxiosError } from 'axios';

const BASE_API_URL = process.env.BASE_API_URL || 'http://localhost';

export type ResponseType<T = undefined> = {
  code: number;
  data?: T;
  message?: string;
};

export type IErrorResponse = {
  code: string;
  config: any;
  message: string;
  response: {
    config: any;
    data: {
      error: string;
      message: string;
      statusCode: number;
    };
    headers: any;
    request: any;
    status: number;
    statusText: string;
  };
};

export const globalAxios = axios.create({
  baseURL: `${BASE_API_URL}/api`,
  timeout: 1000,
  headers: {
    'Content-type': 'application/json',
  },
});

export const isAxiosError = (error: any): error is AxiosError => !!error.isAxiosError;
