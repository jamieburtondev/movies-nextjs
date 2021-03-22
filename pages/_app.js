import "../styles/globals.css";
import Search from "../components/search";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Search />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
