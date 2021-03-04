import { AppProps } from 'next/app';
import '@/styles/global.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo';
import Layout from '../components/Layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
