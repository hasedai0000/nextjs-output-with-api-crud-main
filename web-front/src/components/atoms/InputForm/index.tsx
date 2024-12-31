/**
 * InputForm
 *
 * @package components/atoms
 */

import { FC } from 'react';
import styles from './styles.module.css';

type Props = {
  placeholder: string;
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * InputForm
 * @param placeholder
 * @param inputValue
 * @param onChange
 * @returns {JSX.Element}
 * @constructor
 */
export const InputForm: FC<Props> = ({ placeholder, inputValue, onChange }) => {
  return (
    <input className={styles.input} type="text" placeholder={placeholder} value={inputValue} onChange={onChange} />
  );
};
