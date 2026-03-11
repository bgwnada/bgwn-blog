import type { GetServerSideProps, NextPage } from 'next';

const BlogPage: NextPage = () => null;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/home',
      permanent: false,
    },
  };
};

export default BlogPage;
