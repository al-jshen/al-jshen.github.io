import Link from "next/link";

export default function Projects() {
  return (
    <div className="column">
      <h3 className="title">Selected work</h3>

      <Link href="https://github.com/al-jshen/traycer">
        <a className="card">
          <h3>
            traycer
            <span style={{ color: "#bf616a" }}>&#8599;</span>
          </h3>
          <p>A parallel ray tracing engine built with Rust.</p>
        </a>
      </Link>
      <Link href="https://github.com/al-jshen/mcmc-rs">
        <a className="card">
          <h3>
            mcmc-rs
            <span style={{ color: "#bf616a" }}>&#8599;</span>
          </h3>
          <p>
            Markov Chain Monte Carlo sampler, built on and as a demo of a custom
            statistics crate.
          </p>
        </a>
      </Link>
      <Link href="https://github.com/al-jshen/compute">
        <a className="card">
          <h3>
            compute
            <span style={{ color: "#bf616a" }}>&#8599;</span>
          </h3>
          <p>A crate for statistical computing.</p>
        </a>
      </Link>
      <Link href="https://github.com/al-jshen/gmestan">
        <a className="card">
          <h3>
            gmestan
            <span style={{ color: "#bf616a" }}>&#8599;</span>
          </h3>
          <p>
            Estimating the mass distribution of the Milky Way halo with Stan.
          </p>
        </a>
      </Link>
    </div>
  );
}
