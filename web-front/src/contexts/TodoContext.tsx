/**
 * TodoContext
 *
 * @package context
 */

import { useTodo } from '@/hooks/useTodo';
import { TodoType } from '@/types/Todo';
import { createContext, FC, ReactNode, useContext } from 'react';

type Props = {
  children: ReactNode;
};

type ContextInterface = {
  originTodoList: Array<TodoType>;
};
/**
 * TodoContext
 */
const TodoContext = createContext({} as ContextInterface);

/**
 * TodoProvider
 */
export const TodoProvider: FC<Props> = ({ children }) => {
  const { originTodoList } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        originTodoList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

/**
 * useTodoContext
 */
export const useTodoContext = () => useContext(TodoContext);
