/**
 * useTodoCreateTemplate
 *
 * @package components/templates/TodoCreateTemplate
 */

import { NAVIGATION_PATH } from '@/constants/navigation';
import { EventType } from '@/types/Event';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';

type Props = {
  addTodo: (title: string, content: string) => void;
};

type StatesType = {
  inputTitle: string;
  inputContent: string;
};

type ActionsType = {
  handleTitle: EventType['onChangeInput'];
  handleContent: EventType['onChangeTextArea'];
  handleCreateTodo: EventType['onSubmit'];
};

/**
 * useTodoCreateTemplate
 * TodoCreateTemplateのロジックを管理する
 *
 * @param originTodoList
 */
export const useTodoCreateTemplate = ({ addTodo }: Props) => {
  const router = useRouter();
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

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
  const handleCreateTodo: EventType['onSubmit'] = useCallback(
    (e) => {
      e.preventDefault();
      if (inputTitle !== '' && inputContent !== '') {
        addTodo(inputTitle, inputContent);
        router.push(NAVIGATION_PATH.TOP);
      }
    },
    [addTodo, inputTitle, inputContent, router]
  );

  const state: StatesType = {
    inputTitle,
    inputContent,
  };

  const action: ActionsType = {
    handleTitle,
    handleContent,
    handleCreateTodo,
  };

  return [state, action] as const;
};
