import React from "react";
import { useRouter } from "next/router";
import { authService } from "../src/services/auth/authService";

export default function HomeScreen() {
  const router = useRouter();
  const [value, setValue] = React.useState({
    usuario: "omariosouto",
    senha: "safepassword",
  });

  function handleChange(e) {
    const fieldValue = e.target.value;
    const fieldName = e.target.name;
    setValue((currentValue) => {
      return {
        ...currentValue,
        [fieldName]: fieldValue,
      };
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          authService
            .login(value.usuario, value.senha)
            .then(() => {
              router.push("/auth-page-ssr");
              // router.push("/auth-page-static");
            })
            .catch((err) => {
              alert("Usuário ou Senha são inválidos");
            });
        }}
      >
        <input
          placeholder="Usuário"
          name="usuario"
          value={value.usuario}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="senha"
          type="password"
          value={value.senha}
          onChange={handleChange}
        />
        <div>
          <button>Entrar</button>
        </div>
      </form>

      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  );
}
