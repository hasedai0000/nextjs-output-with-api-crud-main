import { InputForm } from '@/components/atoms/InputForm';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import styles from './styles.module.css';
import { TextAreaForm } from '@/components/atoms/TextAreaForm';
import { useTodoContext } from '@/contexts/TodoContext';
import { useTodoDetailTemplate } from './useTodoDetailTemplate';

export const TodoDetailTemplate = () => {
  const { originTodoList } = useTodoContext();
  const [{ todo }] = useTodoDetailTemplate({
    originTodoList,
  });

  return (
    <BaseLayout title="Edit Todo">
      {!!todo && (
        <>
          <div className={styles.area}>
            <InputForm value={todo.title} />
          </div>
          <div className={styles.area}>
            <TextAreaForm value={todo.content} />
          </div>
        </>
      )}
    </BaseLayout>
  );
};
