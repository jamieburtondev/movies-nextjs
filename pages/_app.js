import "../styles/globals.css";
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Link href="/"><a>Go Home</a></Link>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
