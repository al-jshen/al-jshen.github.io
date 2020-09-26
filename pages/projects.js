import Link from "next/link";

export default function Projects() {
  return (
    <div className="column">
      <div className="card">
        <h3>
          <Link href="/projects/test">
            <a className="clickable">Testing &rarr;</a>
          </Link>
        </h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </div>

      <div className="card">
        <h3>
          <Link href="/projects/test">
            <a>Testing &rarr;</a>
          </Link>
        </h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </div>

      <div className="card">
        <h3>
          <Link href="/projects/test">
            <a>Testing &rarr;</a>
          </Link>
        </h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </div>

      <div className="card">
        <h3>
          <Link href="/projects/test">
            <a>Testing &rarr;</a>
          </Link>
        </h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </div>
    </div>
  );
}
