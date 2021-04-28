import Head from "next/head";
import List from "../components/list";
import { getNowPlaying, getUpcoming } from "../util";

export default function Home(props) {
  const { nowPlaying, upcoming } = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <List title={"Now Playing"} movies={nowPlaying} />
        {/* <List title={"Upcoming"} movies={upcoming} /> */}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const nowPlaying = await getNowPlaying();
  const upcoming = await getUpcoming();

  return {
    props: {
      nowPlaying: nowPlaying.results.length
        ? nowPlaying.results.slice(0, 5)
        : [],
      upcoming: upcoming.results.length ? upcoming.results.slice(0, 5) : [],
    },
  };
}
