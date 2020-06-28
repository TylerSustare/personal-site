import { ReactElement } from 'react';
import Head from 'next/head';
import { HomeContent } from '../src/components/Home';

const Home = function (): ReactElement {
  return (
    <>
      <Head>
        <title>G. Tyler Sustare</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContent />
    </>
  );
};

export default Home;
