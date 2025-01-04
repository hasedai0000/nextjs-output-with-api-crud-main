/**
 * useTodoDetailTemplate
 *
 * @package components/templates/TodoEditTemplate
 */

import { TodoType } from '@/types/Todo';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

type Props = {
  originTodoList: Array<TodoType>;
};

type StatesType = {
  todo: TodoType | undefined;
};

/**
 * useTodoDetailTemplate
 *
 * @param originTodoList
 */
export const useTodoDetailTemplate = ({ originTodoList }: Props) => {
  const router = useRouter();
  const todo = useMemo(
    () => originTodoList.find((todo) => String(todo.id) === router?.query?.id),
    [router?.query?.id, originTodoList]
  );

  const state: StatesType = {
    todo,
  };

  return [state] as const;
};
