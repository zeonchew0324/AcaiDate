import { Link } from "react-router-dom";

const VALUES = [
  {
    n: "01",
    title: "Made your way",
    body: "Choose any four toppings and build the bowl that is yours. Customization is the whole point.",
  },
  {
    n: "02",
    title: "Made to order",
    body: "Nothing is pre-scooped or sitting out. Your bowl is built when you walk in — which is exactly why we don't deliver.",
  },
  {
    n: "03",
    title: "Take it anywhere",
    body: "Grab-and-go and sealed for the journey — a picnic, a study session, a gym recovery, or time with yourself.",
  },
];

export default function Mission() {
  return (
    <main>
      <section
        className="wrap top"
        style={{ paddingBottom: "clamp(48px,7vw,88px)" }}
      >
        <div className="eyebrow in">Our Mission</div>
        <h1
          className="up"
          style={{
            marginTop: 28,
            fontSize: "clamp(32px,4.6vw,60px)",
            lineHeight: 1.14,
            maxWidth: "22ch",
          }}
        >
          To prove that something this{" "}
          <span style={{ color: "var(--violet)" }}>good for you</span> can also
          feel like a <span style={{ color: "var(--pink)" }}>date</span>.
        </h1>
        <p className="lede" style={{ marginTop: 26 }}>
          One bowl, made properly, every single day.
        </p>
      </section>

      <section className="wrap">
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}
        >
          {VALUES.map((v) => (
            <div key={v.n} className="card hover">
              <span className="num">{v.n}</span>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec wrap">
        <div className="quote">
          <p>Pick-up only, always.</p>
          <div className="by">
            Because the best thing we make can't survive the trip
          </div>
          <Link to="/contact" className="btn light" style={{ marginTop: 34 }}>
            Visit us →
          </Link>
        </div>
      </section>
    </main>
  );
}
