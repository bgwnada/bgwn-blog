import type { NextPage } from 'next';
import Head from 'next/head';
import BgwnApp from '../App';
import { TabOption } from '../types';

const MusicPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Music | BGWN Records</title>
      </Head>
      <BgwnApp initialTab={TabOption.MUSIC} />
    </>
  );
};

export default MusicPage;
