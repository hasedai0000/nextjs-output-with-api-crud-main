/**
 * useTodoListTemplate
 *
 * @package components/templates/TodoListTemplate
 */

import { EventType } from '@/types/Event';
import { TodoType } from '@/types/Todo';
import { useCallback, useMemo, useState } from 'react';

type Props = {
  originTodoList: TodoType[];
  deleteTodo: (id: number) => Promise<void>;
};

type StatesType = {
  searchKeyword: string;
  showTodoList: TodoType[];
};

type ActionsType = {
  handleSearchKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteTodo: (id: number, title: string) => void;
};

/**
 * useTodoListTemplate
 * TodoListTemplateのロジックを管理する
 *
 * @param originTodoList
 */
export const useTodoListTemplate = ({ originTodoList, deleteTodo }: Props) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchKeyword: EventType['onChangeInput'] = useCallback((e) => {
    setSearchKeyword(e.target.value);
  }, []);

  const showTodoList = useMemo(() => {
    const regexp = new RegExp('^' + searchKeyword, 'i');
    return originTodoList.filter((todo) => {
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  /**
   * Todo削除処理
   * @param { number } id
   * @param { string } title
   */
  const handleDeleteTodo = useCallback(
    (id: number, title: string) => {
      if (window.confirm(`「${title}」のtodoを削除しますか？`)) {
        deleteTodo(id);
      }
    },
    [deleteTodo]
  );

  const state: StatesType = {
    searchKeyword,
    showTodoList,
  };

  const action: ActionsType = {
    handleSearchKeyword,
    handleDeleteTodo,
  };

  return [state, action] as const;
};
