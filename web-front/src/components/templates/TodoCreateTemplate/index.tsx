import { InputForm } from '@/components/atoms/InputForm';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import styles from './styles.module.css';
import { TextAreaForm } from '@/components/atoms/TextAreaForm';
import { useTodoContext } from '@/contexts/TodoContext';
import { useTodoCreateTemplate } from './useTodoCreateTemplate';
import { CommonButton } from '@/components/atoms/CommonButton';

export const TodoCreateTemplate = () => {
  const { addTodo } = useTodoContext();
  const [{ inputTitle, inputContent }, { handleTitle, handleContent, handleCreateTodo }] = useTodoCreateTemplate({
    addTodo,
  });

  return (
    <BaseLayout title="Create Todo">
      <form className={styles.container} onSubmit={handleCreateTodo}>
        <div className={styles.area}>
          <InputForm placeholder="New Todo Title" value={inputTitle} onChange={handleTitle} />
        </div>
        <div className={styles.area}>
          <TextAreaForm placeholder="New Todo Content" value={inputContent} onChange={handleContent} />
        </div>
        <div className={styles.area}>
          <CommonButton type="submit" title="Create" />
        </div>
      </form>
    </BaseLayout>
  );
};
