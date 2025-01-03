/**
 * NavigationLink
 *
 * @package components/atoms
 */
import { FC } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

type Props = {
  title: string;
  linkPath: string;
};

/**
 * NavigationLink
 * @param linkPath
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
export const NavigationLink: FC<Props> = ({ title, linkPath }) => {
  return (
    <li className={styles.li}>
      <Link href={linkPath}>{title}</Link>
    </li>
  );
};
