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
};

type StatesType = {
  searchKeyword: string;
  showTodoList: TodoType[];
};

type ActionsType = {
  handleSearchKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * useTodoListTemplate
 * TodoListTemplateのロジックを管理する
 *
 * @param originTodoList
 */
export const useTodoListTemplate = ({ originTodoList }: Props) => {
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

  const state: StatesType = {
    searchKeyword,
    showTodoList,
  };

  const action: ActionsType = {
    handleSearchKeyword,
  };

  return [state, action] as const;
};
