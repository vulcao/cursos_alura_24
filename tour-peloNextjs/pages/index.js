import Link from "next/link";

function HomePage() {
    return (
        <div>
            <h1>lol</h1>
            <img src="https://github.com/vulcao.png" />
            <img src="/images/avatar.png" />
            <ul>
                <li>
                    <Link href="/sobre">Ir para Sobre</Link>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;
