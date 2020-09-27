import Link from "next/link";

export default function Projects() {
  return (
    <div className="column">
      <h3 className="title">Selected work</h3>

      <Link href="https://github.com/al-jshen/traycer">
        <a className="card">
          <h3>
            T<span style={{ color: "#ebcb8b" }}>ray</span>cer
            <span style={{ color: "#bf616a" }}>&#8599;</span>
          </h3>
          <p>&mdash; A parallel ray tracing engine built with Rust.</p>
        </a>
      </Link>
      <Link href="https://github.com/al-jshen/mcmc-rs">
        <a className="card">
          <h3>
            mcmc-rs
            <span style={{ color: "#bf616a" }}>&#8599;</span>
          </h3>
          <p>
            Markov Chain Monte Carlo sampler, built on a custom statistics
            crate.
          </p>
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
      <Link href="/projects/test" className="card">
        <a className="card">
          <h3>Testing &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </Link>
    </div>
  );
}
