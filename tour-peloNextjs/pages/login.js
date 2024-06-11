import React from "react";
import { useRouter } from "next/router";
import nookies from "nookies";

export default function LoginScreen() {
  const [senha, setSenha] = React.useState("12345");
  const router = useRouter();
  console.log("LoginScreen", router);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (senha) {
            nookies.set(null, "SENHA_SECRETA", senha, {
              maxAge: 30 * 24 * 60 * 60,
              path: "/",
            });
            router.push("/area-logada");
          } else {
            alert("Informe uma senha!");
          }
        }}
      >
        <input
          type="text"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit"> GO </button>
      </form>
    </div>
  );
}

