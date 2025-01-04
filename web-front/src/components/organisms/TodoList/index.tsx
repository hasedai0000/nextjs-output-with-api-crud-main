/**
 * TodoList
 *
 * @package components/atoms
 */

import { TodoType } from '@/interfaces/Todo';
import { FC } from 'react';

import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPenToSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useTodoList } from './useTodoList';
import { useTodo } from '@/hooks/useTodo';

type Props = {
  showTodoList: TodoType[];
  handleDeleteTodo: (id: number, title: string) => void;
};

/**
 * TodoList
 * @param showTodoList
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoList: FC<Props> = ({ showTodoList, handleDeleteTodo }) => {
  const [{ handleMoveToEdit, handleMoveToDetail }] = useTodoList();

  return (
    <ul className={styles.list}>
      {showTodoList.map((todo) => (
        <li className={styles.todo} key={todo.id}>
          <span className={styles.task}>{todo.title}</span>
          <div className={styles.area}>
            <div className={styles.far}>
              {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
              <FontAwesomeIcon icon={faFile} size="lg" onClick={() => handleMoveToDetail(todo.id)} />
            </div>
            <div className={styles.far}>
              {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
              <FontAwesomeIcon icon={faPenToSquare} size="lg" onClick={() => handleMoveToEdit(todo.id)} />
            </div>
            <div className={styles.far}>
              {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
              <FontAwesomeIcon icon={faTrashAlt} size="lg" onClick={() => handleDeleteTodo(todo.id, todo.title)} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
