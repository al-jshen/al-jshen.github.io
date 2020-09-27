import Head from "next/head";
import Projects from "./projects";
import About from "./about";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jeff Shen</title>
        <link rel="icon" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <div className="row">
          <About />
          <Projects />
        </div>
      </main>
    </div>
  );
}
