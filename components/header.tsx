import Head from "next/head";

export const HeaderComponent = () => {
    return (
        <Head>
            <title>dnd-mini-game</title>
            <meta
                name={"keywords"}
                content={"dnd, mini-game"}
            />
            <meta
                name={"descriptions"}
                content={"dnd mini-game with next"}
            />
        </Head>
    )
}