import Link from "next/link";

export default function Projects() {
  return (
    <div className="column">
      <div className="card">
        <h3>
          <Link href="/projects/test">
            <a>Testing &rarr;</a>
          </Link>
        </h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </div>

      <a href="https://nextjs.org/learn" className="card">
        <h3>Learn &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        className="card"
      >
        <h3>Examples &rarr;</h3>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>

      <a
        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="card"
      >
        <h3>Deploy &rarr;</h3>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </a>
    </div>
  );
}
