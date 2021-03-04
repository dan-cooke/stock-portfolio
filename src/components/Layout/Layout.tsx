import Head from 'next/head';
import * as React from 'react';
import styles from './Layout.module.css';

const Layout: React.FC = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Dan's Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>{children}</main>

    <footer className={styles.footer}>Source code </footer>
  </div>
);

export default Layout;
