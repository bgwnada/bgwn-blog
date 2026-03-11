import type { NextPage } from 'next';
import Head from 'next/head';
import BgwnApp from '../App';
import { TabOption } from '../types';

const SupportPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Support | BGWN Records</title>
      </Head>
      <BgwnApp initialTab={TabOption.SUPPORT} />
    </>
  );
};

export default SupportPage;
