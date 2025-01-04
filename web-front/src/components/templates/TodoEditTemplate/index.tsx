import { InputForm } from '@/components/atoms/InputForm';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import styles from './styles.module.css';
import { TextAreaForm } from '@/components/atoms/TextAreaForm';
import { useTodoContext } from '@/contexts/TodoContext';
import { useTodoEditTemplate } from './useTodoEditTemplate';
import { CommonButton } from '@/components/atoms/CommonButton';

export const TodoEditTemplate = () => {
  const { originTodoList, updateTodo } = useTodoContext();
  const [{ todo, inputTitle, inputContent }, { handleTitle, handleContent, handleUpdateTodo }] = useTodoEditTemplate({
    originTodoList,
    updateTodo,
  });

  return (
    <BaseLayout title="Edit Todo">
      {!!todo && (
        <form className={styles.container} onSubmit={handleUpdateTodo}>
          <div className={styles.area}>
            <InputForm value={inputTitle} onChange={handleTitle} />
          </div>
          <div className={styles.area}>
            <TextAreaForm value={inputContent} onChange={handleContent} />
          </div>
          <div className={styles.area}>
            <CommonButton type="submit" title="Update" />
          </div>
        </form>
      )}
    </BaseLayout>
  );
};
