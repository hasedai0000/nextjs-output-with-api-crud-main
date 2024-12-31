import { InputForm } from '@/components/atoms/InputForm';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import { TodoList } from '@/components/organisms/TodoList';
import styles from './styles.module.css';
import { useTodoListTemplate } from './useTodoListTemplate';
import { useTodoContext } from '@/contexts/TodoContext';

export const TodoListTemplate = () => {
  const { originTodoList } = useTodoContext();
  const [{ searchKeyword, showTodoList }, { handleSearchKeyword }] = useTodoListTemplate({ originTodoList });

  return (
    <BaseLayout title="TodoList">
      <div className={styles.container}>
        <div className={styles.area}>
          <InputForm placeholder="Search Word" inputValue={searchKeyword} onChange={handleSearchKeyword} />
        </div>
        <div className={styles.area}>
          <TodoList showTodoList={showTodoList} />
        </div>
      </div>
    </BaseLayout>
  );
};
