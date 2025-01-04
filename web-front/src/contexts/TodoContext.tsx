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
  addTodo: (title: string, content: string) => Promise<void>;
  updateTodo: (id: number, title: string, content: string) => Promise<void>;
  deleteTodo: (targetId: number) => Promise<void>;
};
/**
 * TodoContext
 */
const TodoContext = createContext({} as ContextInterface);

/**
 * TodoProvider
 */
export const TodoProvider: FC<Props> = ({ children }) => {
  const { originTodoList, addTodo, updateTodo, deleteTodo } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        originTodoList,
        addTodo,
        updateTodo,
        deleteTodo,
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
