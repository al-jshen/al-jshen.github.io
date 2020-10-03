import Link from "next/link";

export default function About() {
  return (
    <div className="column">
      <div style={{ display: "inline" }}>
        <h1 className="title">Jeff Shen</h1>
        <p>&nbsp;</p>
      </div>
      <p>
        I am currently doing research in the field of astrostatistics under the
        supervision of Gwen Eadie and Norm Murray. My focus is on applying
        Bayesian statistics to study the mass distribution of the Milky Way
        using kinematic data from tracer objects.
      </p>
      <p>
        Before this, I was a summer research student supervised by Allison Man.
        I studied molecular gas in faint high redshift galaxies by leveraging
        gravitational lensing.
      </p>
      <p>
        I love to write{" "}
        <a style={{ color: "#d08770" }} href="https://www.rust-lang.org/">
          Rust
        </a>{" "}
        and do *nix customization
        <sup style={{ color: "#a3be8c" }}>&dagger;</sup>. I also love to learn
        new things. Most recently, I've taken up running and playing the guitar.
      </p>
    </div>
  );
}
