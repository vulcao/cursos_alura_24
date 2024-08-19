import { tokenService } from "../../services/auth/tokenService";

export async function HttpClient(fetchUrl, fetchOptions) {
  const options = {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  };
  return fetch(fetchUrl, options)
    .then(async (response) => {
      return {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        body: await response.json(),
      };
    })
    .then(async (response) => {
      if (!fetchOptions.refresh) return response;
      if (response.status !== 401) return response;
      console.log("rodar codigo para atualizar o token");

      const refreshResponse = await HttpClient(
        "http://localhost:3000/api/refresh",
        {
          method: "GET",
        }
      );
      // [Tenta atualizar os tokens]
      const newAccessToken = refreshResponse.body.data.access_token;
      const newRefreshToken = refreshResponse.body.data.refresh_token;

      // [Guarda novos tokens no front-end]
      tokenService.save(newAccessToken);

      // [Tenta refazer a requisição]
      const retryResponse = await HttpClient(fetchUrl, {
        ...options,
        refresh: false,
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      });

      return retryResponse;
    });
}
