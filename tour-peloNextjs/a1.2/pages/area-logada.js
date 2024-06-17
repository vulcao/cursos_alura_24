import { useRouter } from "next/router";
import nookies from "nookies";

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  console.log({ cookies });

  const SENHA_SECRETA = "12345";
  const isAutorizado = SENHA_SECRETA == cookies.SENHA_SECRETA;
  if (!isAutorizado) {
    console.log("Não Autorizado");
    return {
      redirect: {
        permanent: false,
        destination: "/login?code=401",
      },
    };
  }
  console.log("Autorizado");
  return {
    props: {},
  };
}

export default function AreaLogadaScreen(props) {
  const router = useRouter();

  return (
    <div>
      <p>Você acessou a área logada</p>
      <button
        onClick={(e) => {
          nookies.destroy(null, "SENHA_SECRETA");
          router.push("/login");
        }}
      >
        Sair
      </button>
    </div>
  );
}

