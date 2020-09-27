import Link from "next/link";

export default function Projects() {
  return (
    <div className="column">
      <Link href="/projects/test" className="card">
        <a className="card">
          <h3>Testing &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </Link>
      <Link href="/projects/test" className="card">
        <a className="card">
          <h3>Testing &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </Link>
      <Link href="/projects/test" className="card">
        <a className="card">
          <h3>Testing &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </Link>
      <Link href="/projects/test" className="card">
        <a className="card">
          <h3>Testing &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </Link>
    </div>
  );
}
