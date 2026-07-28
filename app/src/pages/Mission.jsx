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
        style={{ paddingBottom: "clamp(44px,7vw,90px)" }}
      >
        <div className="eyebrow in">💜 Our Mission</div>
        <h1
          className="up"
          style={{
            marginTop: 24,
            fontSize: "clamp(32px,5vw,64px)",
            lineHeight: 1.16,
            maxWidth: "20ch",
          }}
        >
          To prove that something this{" "}
          <span style={{ color: "var(--violet)" }}>good for you</span> can also
          feel like a <span style={{ color: "var(--pink)" }}>date</span>.
        </h1>
        <p className="lede" style={{ marginTop: 22 }}>
          One bowl, made properly, every single day.
        </p>
      </section>

      <section className="wrap">
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}
        >
          {VALUES.map((v) => (
            <div key={v.n} className="card hover">
              <div className="num">{v.n}</div>
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
          <Link to="/contact" className="btn ghost" style={{ marginTop: 30 }}>
            Visit us →
          </Link>
        </div>
      </section>
    </main>
  );
}
