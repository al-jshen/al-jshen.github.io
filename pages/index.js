import Head from "next/head";
import About from "./about";
import Projects from "./projects";
import Misc from "./misc";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jeff Shen</title>
        <link rel="icon" href="/logo.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <div className="row">
          <About />
          <div className="column">
            <Projects />
            <Misc />
          </div>
        </div>
      </main>
    </div>
  );
}
