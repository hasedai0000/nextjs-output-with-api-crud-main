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
  handleMoveToDetail: (id: string) => void;
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

  /**
   * 詳細ページへの遷移
   * @param id
   * @type {function(*): void}
   */
  const handleMoveToDetail = useCallback(
    (id: string) => {
      router.push(`${NAVIGATION_PATH.DETAIL}${id}`);
    },
    [router]
  );

  const actions: ActionType = {
    handleMoveToEdit,
    handleMoveToDetail,
  };

  return [actions] as const;
};
