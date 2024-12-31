/**
 * BaseLayout
 *
 * @package components/organisms
 */
import { FC, ReactNode } from 'react';
import styles from './styles.module.css';
import { Navigation } from '@/components/molecules/Navigation';

type Props = {
  children: ReactNode;
  title: string;
};

/**
 * BaseLayout
 * @param children
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
export const BaseLayout: FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <section className={styles.common}>
        <Navigation />
      </section>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};
