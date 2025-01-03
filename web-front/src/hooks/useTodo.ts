/**
 * useTodo
 * Todoのロジックを管理する
 *
 * @package hook
 */

import { useCallback, useEffect, useState } from 'react';
import { TodoType } from '@/types/Todo';
import { createTodoApi, fetchTodoListApi, updateTodoApi } from '@/apis/todoApi';

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

  /**
   * Todo新規登録処理
   * @param {string} title
   * @param {string} content
   */
  const addTodo = useCallback(
    async (title: string, content: string) => {
      const todo = await createTodoApi(title, content);
      if (typeof todo !== 'object') return;
      setOriginTodoList([
        ...originTodoList,
        {
          id: todo.id,
          title: todo.title,
          content: todo.content,
        },
      ]);
    },
    [originTodoList]
  );

  /**
   * Todo更新処理
   * @param {number} id
   * @param {string} title
   * @param {string} content
   */
  const updateTodo = useCallback(
    async (id: number, title: string, content: string) => {
      const responseTodo = await updateTodoApi(id, title, content);
      if (typeof responseTodo !== 'object') return;
      const updatedTodoList = originTodoList.map((todo) => {
        if (responseTodo.id === todo.id) {
          return {
            id: responseTodo.id,
            title: responseTodo.title,
            content: responseTodo.content,
          };
        }
        return todo;
      });
      setOriginTodoList(updatedTodoList);
    },
    [originTodoList]
  );

  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  return { originTodoList, addTodo, updateTodo };
};
