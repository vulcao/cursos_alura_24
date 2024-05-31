import Link from "next/link";
import dados from "../dados.json";

export async function getStaticProps() {
    return {
        props: {
            posts: dados.posts,
        },
    };
}

export default function HomeScreen({ posts }) {
    const infos = {
        nome: "Vulcão",
        githubUser: "vulcao",
    };

    return (
        <div
            styleSheet={{
                flexDirection: "column",
                margin: "32px auto",
                maxWidth: "800px",
                paddingHorizontal: "16px",
            }}
        >
            <h1>{infos.nome}</h1>
            <img
                src={`https://github.com/${infos.githubUser}.png`}
                width={100}
            />
            <ul>
                <li>
                    <Link href="/sobre">Ir para Sobre</Link>
                </li>
            </ul>
            <hr />
            <div
                styleSheet={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    marginTop: "16px",
                    gridGap: "16px",
                }}
            >
                {posts.map(({ title, content, id }) => (
                    <Post key={id} title={title} content={content} id={id} />
                ))}
            </div>
        </div>
    );
}

function Post({ title, content, id }) {
    return (
        <div
            styleSheet={{
                flexDirection: "column",
                border: "1px solid #F9703E",
                padding: "16px",
                boxShadow: "1px 1px 5px 0 rgba(255,69,0,0.2)",
                transition: ".3s",
                borderRadius: "4px",
                hover: {
                    boxShadow: "1px 1px 5px 5px rgba(255,69,0,0.2)",
                },
            }}
        >
            <Link href={`posts/${id}`} passHref>
                {title}
            </Link>
            <p>{content.substring(0, 140)}...</p>
        </div>
    );
}
