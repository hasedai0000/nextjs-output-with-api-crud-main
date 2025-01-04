import { InputForm } from '@/components/atoms/InputForm';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import { TodoList } from '@/components/organisms/TodoList';
import styles from './styles.module.css';
import { useTodoListTemplate } from './useTodoListTemplate';
import { useTodoContext } from '@/contexts/TodoContext';

export const TodoListTemplate = () => {
  const { originTodoList, deleteTodo } = useTodoContext();
  const [{ searchKeyword, showTodoList }, { handleSearchKeyword, handleDeleteTodo }] = useTodoListTemplate({
    originTodoList,
    deleteTodo,
  });

  return (
    <BaseLayout title="TodoList">
      <div className={styles.container}>
        <div className={styles.area}>
          <InputForm placeholder="Search Word" value={searchKeyword} onChange={handleSearchKeyword} />
        </div>
        <div className={styles.area}>
          <TodoList showTodoList={showTodoList} handleDeleteTodo={handleDeleteTodo} />
        </div>
      </div>
    </BaseLayout>
  );
};
