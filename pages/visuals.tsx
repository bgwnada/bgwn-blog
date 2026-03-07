import type { NextPage } from 'next';
import Head from 'next/head';
import BgwnApp from '../App';
import { TabOption } from '../types';

const VisualsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Visuals | BGWN Records</title>
      </Head>
      <BgwnApp initialTab={TabOption.VISUALS} />
    </>
  );
};

export default VisualsPage;
