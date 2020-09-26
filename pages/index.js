import Head from "next/head";
import Projects from "./projects";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jeff Shen</title>
        <link rel="icon" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <div className="column">
          <h1 className="title">Jeff Shen</h1>
          <p>testing</p>
        </div>

        <div className="column">
          <h1 className="title">Selected work</h1>
          <Projects />
        </div>
      </main>
    </div>
  );
}
