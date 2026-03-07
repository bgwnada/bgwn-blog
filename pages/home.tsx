import type { NextPage } from 'next';
import Head from 'next/head';
import BgwnApp from '../App';
import { TabOption } from '../types';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | BGWN Records</title>
      </Head>
      <BgwnApp initialTab={TabOption.HOME} />
    </>
  );
};

export default HomePage;
