/**
 * InputForm
 *
 * @package components/atoms
 */

import { FC } from 'react';
import styles from './styles.module.css';

type Props = JSX.IntrinsicElements['input'];

/**
 * InputForm
 * @param placeholder
 * @param inputValue
 * @param onChange
 * @returns {JSX.Element}
 * @constructor
 */
export const InputForm: FC<Props> = ({ placeholder, value, onChange }) => {
  return <input className={styles.input} type="text" placeholder={placeholder} value={value} onChange={onChange} />;
};
