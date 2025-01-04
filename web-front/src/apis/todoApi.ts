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

/**
 * Todo新規登録API接続処理
 * @param {string} title
 * @param {string} content
 */
export const createTodoApi = async (title: string, content: string) => {
  try {
    const { data }: AxiosResponse<TodoType> = await globalAxios.post('/todo/', { title, content });
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.code;
    }
  }
};

/**
 * Todo更新API接続処理
 * @param {string} id
 * @param {string} title
 * @param {string} content
 */
export const updateTodoApi = async (id: number, title: string, content: string) => {
  try {
    const { data }: AxiosResponse<TodoType> = await globalAxios.patch(`/todo/${id}`, {
      title,
      content,
    });
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.code;
    }
  }
};

/**
 * Todo削除API接続処理
 * @param {number} id
 */
export const deleteTodoApi = async (id: number) => {
  try {
    const { data }: AxiosResponse<TodoType> = await globalAxios.delete(`/todo/${id}`);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.code;
    }
  }
};
