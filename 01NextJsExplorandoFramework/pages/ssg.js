import { InferGetStaticPropsType, GetStaticProps } from "next";
import Link from "../src/components/Link";
import delay from "../src/components/delay";

export const getStaticProps = async (context) => {
  await delay(4);
  const mensagem = "Fui gerada durante o build!";
  return { props: { mensagem } };
};

export default function SSG({ mensagem }) {
  return (
    <div>
      <h2>SSG</h2>
      <Link href="/">Volte para o início</Link>
      <Link href="/ssr">SSR</Link>
      <p>{mensagem}</p>
      <br />
      <p>/SSG demora 4 segundos, mas só em dev, pois é renderizada no build</p>
    </div>
  );
}
