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
  addTodo: (title: string, content: string) => void;
  updateTodo: (id: number, title: string, content: string) => void;
};
/**
 * TodoContext
 */
const TodoContext = createContext({} as ContextInterface);

/**
 * TodoProvider
 */
export const TodoProvider: FC<Props> = ({ children }) => {
  const { originTodoList, addTodo, updateTodo } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        originTodoList,
        addTodo,
        updateTodo,
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
