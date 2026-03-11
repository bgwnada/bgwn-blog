import type { NextPage } from 'next';
import Head from 'next/head';
import BgwnApp from '../App';
import { TabOption } from '../types';

const ArtistPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Artist | BGWN Records</title>
      </Head>
      <BgwnApp initialTab={TabOption.ARTIST} />
    </>
  );
};

export default ArtistPage;
