// exemplo do lado do cliente
// a2.4/pages/posts/index.js
import { useRouter } from "next/router";
import dados from "../../dados.json";

export default function Posts(props) {
  const router = useRouter();
  console.log(router.query);

  // pegando o post que tem a data informada como parâmetro
  const posts = dados.posts.filter((post) => post.date === router.query.date);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>
        ))
      ) : (
        <p>Nenhum post encontrado</p>
      )}
    </div>
  );
}
