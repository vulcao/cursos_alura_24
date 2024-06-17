/* 
  /posts/[id]/comentarios.js
  Código praticamente igual ao [id]/index.js
  - o texto foi modificado para mostrar que é a página de comentarios
  - uma li com um Link foi adicionada para voltar para a página do post
*/

import Link from "next/link";
import { useRouter } from "next/router";

export default function Comentarios() {
    const router = useRouter();

    return (
        <div>
            comentários do post com id: {router.query.id}
            <br />
            <ul>
                <li>
                    <Link href="/">Ir para a home</Link>
                </li>
                <li>
                    <Link href={`/posts/${router.query.id}`}>
                        Ir para o post
                    </Link>
                </li>
            </ul>
        </div>
    );
}
