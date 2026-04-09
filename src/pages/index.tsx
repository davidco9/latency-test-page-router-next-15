import type { GetServerSideProps } from 'next';

/**
 * Convenience redirect so visiting `/` lands on the sample Pages Router route.
 */
export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: '/sponsor-accounts/', permanent: false },
});
