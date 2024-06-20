/* import type { GetStaticProps } from "next";
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
}; */

import { GetServerSideProps } from "next";
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default function Home() {
  return <div>Nada por aqui</div>;
}
