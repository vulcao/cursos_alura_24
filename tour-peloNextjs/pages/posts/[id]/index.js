import { useRouter } from "next/router";
import Link from "next/link";

export default function Post() {
    const router = useRouter();

    return (
        <div>
            {router.query.id}
            <ul>
                <li>
                    <Link href="/">Ir para a home</Link>
                </li>
                <li>
                    <Link href={`${router.query.id}/comentarios`}>
                        Ir para os Comentários
                    </Link>
                </li>
            </ul>
        </div>
    );
}

