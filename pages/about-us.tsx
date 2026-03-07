import type { NextPage } from 'next';
import Head from 'next/head';
import BgwnApp from '../App';
import { TabOption } from '../types';

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us | BGWN Records</title>
      </Head>
      <BgwnApp initialTab={TabOption.ABOUT} />
    </>
  );
};

export default AboutPage;
