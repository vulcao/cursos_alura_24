import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Link from "../src/components/Link";
import delay from "../src/components/delay";

export const getServerSideProps = async () => {
  await delay(2);
  const mensagem = "Fui renderizada para esta requisição!";
  return { props: { mensagem } };
};

export default function Page({ mensagem }) {
  return (
    <div>
      <h2>SSR</h2>
      <Link href="/">Volte para o início</Link>
      <Link href="/ssg">SSG</Link>
      <p>{mensagem}</p>
      <br />
      <p>/SSR demora 2 segundos</p>
    </div>
  );
}
