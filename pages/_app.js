import "../styles/global.css";

import Head from "next/head"
import NavBar from "../components/NavBar";
function App({Component,pageProps}){
    console.log('Layout Component !')
    return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico"></link>
        </Head>
        <header>
          <NavBar />
        </header>
        <Component {...pageProps} />
      </>
    );
}

export default App
