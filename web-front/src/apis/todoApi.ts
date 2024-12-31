import { TodoType } from '@/types/Todo';
import { globalAxios, isAxiosError } from './config';
import { AxiosResponse } from 'axios';

/**
 * TodoList取得のAPI接続処理
 * ＠returns
 */
export const fetchTodoListApi = async () => {
  try {
    const { data }: AxiosResponse<Array<TodoType>> = await globalAxios.get('/todo');
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.code;
    }
  }
};
