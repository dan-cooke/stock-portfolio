import Head from 'next/head';
import * as React from 'react';
import styles from './Layout.module.css';

const Layout: React.FC = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Dan;&pos;s Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>{children}</main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=typescript-nextjs-starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{` `}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
  </div>
);

export default Layout;
