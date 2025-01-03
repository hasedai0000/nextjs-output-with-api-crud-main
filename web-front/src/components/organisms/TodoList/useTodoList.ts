/**
 * useTodoList
 *
 * @package components/organisms/TodoList
 */

import { NAVIGATION_PATH } from '@/constants/navigation';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

type ActionType = {
  handleMoveToEdit: (id: string) => void;
};

/**
 * useTodoList
 */
export const useTodoList = () => {
  const router = useRouter();

  /**
   * 編集ページへの遷移
   * @param id
   * @type {function(*): void}
   */
  const handleMoveToEdit = useCallback(
    (id: string) => {
      router.push(`${NAVIGATION_PATH.EDIT}${id}`);
    },
    [router]
  );

  const actions: ActionType = {
    handleMoveToEdit,
  };

  return [actions] as const;
};
