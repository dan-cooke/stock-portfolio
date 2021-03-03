import { AppProps } from 'next/app';
import '@/styles/global.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
