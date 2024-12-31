/**
 * useTodo
 * Todoのロジックを管理する
 *
 * @package hook
 */

import { useCallback, useEffect, useState } from 'react';
import { TodoType } from '@/types/Todo';
import { fetchTodoListApi } from '@/apis/todoApi';

/**
 * useTodo
 */
export const useTodo = () => {
  const [originTodoList, setOriginTodoList] = useState<Array<TodoType>>([]);

  /* actions */
  const fetchTodoList = useCallback(async (): Promise<void> => {
    const data = await fetchTodoListApi();
    setOriginTodoList(typeof data === 'object' ? data : []);
  }, []);

  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  return { originTodoList };
};
