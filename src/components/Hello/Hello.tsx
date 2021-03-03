import * as React from 'react';
import { useHelloQuery } from '@/components/Hello/Hello.graphql';

const Hello: React.FC = () => {
  const { data } = useHelloQuery();
  return (
    <>
      <h3>Data from @apollo/client query:</h3>
      <h2>{JSON.stringify(data)}</h2>
    </>
  );
};
export default Hello;
