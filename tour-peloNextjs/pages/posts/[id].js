import { useRouter } from "next/router";
import Link from "next/link";

export default function Post() {
    const router = useRouter();

    return (
        <div>
            {router.query.id}
            <ul>
                <li>
                    <Link href="/">Voltar ao inicio</Link>
                </li>
            </ul>
        </div>
    );
}

