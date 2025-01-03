/**
 * useTodoEditTemplate
 *
 * @package components/templates/TodoEditTemplate
 */

import { NAVIGATION_PATH } from '@/constants/navigation';
import { EventType } from '@/types/Event';
import { TodoType } from '@/types/Todo';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';

type Props = {
  originTodoList: Array<TodoType>;
  updateTodo: (id: number, title: string, content: string) => void;
};

type StatesType = {
  todo: TodoType | undefined;
  inputTitle: string;
  inputContent: string;
};

type ActionsType = {
  handleTitle: EventType['onChangeInput'];
  handleContent: EventType['onChangeTextArea'];
  handleUpdateTodo: EventType['onSubmit'];
};

/**
 * useTodoEditTemplate
 * TodoCreateTemplateのロジックを管理する
 *
 * @param originTodoList
 */
export const useTodoEditTemplate = ({ originTodoList, updateTodo }: Props) => {
  const router = useRouter();
  const todo = useMemo(
    () => originTodoList.find((todo) => String(todo.id) === router?.query?.id),
    [router?.query?.id, originTodoList]
  );
  const [inputTitle, setInputTitle] = useState(todo?.title || '');
  const [inputContent, setInputContent] = useState(todo?.content || '');

  const handleTitle: EventType['onChangeInput'] = useCallback((e) => {
    setInputTitle(e.target.value);
  }, []);

  const handleContent: EventType['onChangeTextArea'] = useCallback((e) => {
    setInputContent(e.target.value);
  }, []);

  /**
   * Todo追加処理
   * @type {(function(*): void)|*}
   */
  const handleUpdateTodo: EventType['onSubmit'] = useCallback(
    (e) => {
      e.preventDefault();
      if (!!todo?.id && inputTitle !== '' && inputContent !== '') {
        updateTodo(todo.id, inputTitle, inputContent);
        router.push(NAVIGATION_PATH.TOP);
      }
    },
    [updateTodo, todo?.id, inputTitle, inputContent, router]
  );

  const state: StatesType = {
    todo,
    inputTitle,
    inputContent,
  };

  const action: ActionsType = {
    handleTitle,
    handleContent,
    handleUpdateTodo,
  };

  return [state, action] as const;
};
