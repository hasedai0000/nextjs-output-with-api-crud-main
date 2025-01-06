import { AxiosResponse } from 'axios';
import { globalAxios, IErrorResponse, isAxiosError, ResponseType } from './config';
import { AuthResponseType } from '@/types/User';

/**
 * 会員登録API
 * @param name
 * @param email
 * @param password
 * @returns
 */
export const signUpApi = async (name: string, email: string, password: string) => {
  try {
    const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post('auth/sign_up', {
      name,
      email,
      password,
    });
    const res: ResponseType<AuthResponseType> = {
      code: 200,
      data,
    };
    return res;
  } catch (err) {
    const res: ResponseType = {
      code: 500,
      message: '',
    };
    if (isAxiosError(err)) {
      const axiosError = err as IErrorResponse;
      res.code = axiosError.response.status;
      res.message = axiosError.response.data.message;
      return res;
    }
  }
};
