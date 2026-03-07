import type { NextPage } from 'next';
import Head from 'next/head';
import BgwnApp from '../App';
import { TabOption } from '../types';

const BlogPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog | BGWN Records</title>
      </Head>
      <BgwnApp initialTab={TabOption.BLOG} />
    </>
  );
};

export default BlogPage;
