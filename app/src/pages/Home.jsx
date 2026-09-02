import { Link } from "react-router-dom";
import { ORDER_URL } from "../order.js";

const PERKS = [
  {
    n: "01",
    title: "Made your way",
    body: "Pick any four toppings from a full spread of fruit, crunch and superfoods. Your bowl, your rules.",
  },
  {
    n: "02",
    title: "Take it anywhere",
    body: "Sealed for the go — a lecture break, the gym bag, a picnic mat, or your desk at 2am.",
  },
  {
    n: "03",
    title: "Made to order",
    body: "Nothing pre-scooped, nothing sitting out. Your bowl is built the moment you walk in.",
  },
  {
    n: "04",
    title: "Pick-up only",
    body: "We don't deliver — freshness doesn't survive the trip. Come by instead.",
  },
];

const TICKER = ["Take a date anywhere", "Pick-up only", "Order now!"];

export default function Home() {
  return (
    <main>
      <section className="hero wrap split">
        <div className="up">
          <div className="eyebrow">Açaí Date</div>
          <h1>
            Grab a bowl,
            <br />
            <em>make it a date.</em>
          </h1>
          <p className="lede">
            Healthy, build-your-own açaí bowls made to grab and go. Take your
            date anywhere — a picnic, a study break, a gym recovery, or a quiet
            ten minutes with yourself.
          </p>
          <div className="row">
            <Link to="/menu" className="btn ghost">
              See the bowls →
            </Link>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Order now →
            </a>
          </div>
          <div className="meta">
            Choose any four toppings · Pick-up only · Bangsar, KL
          </div>
        </div>
        <div className="heroart">
          <img
            src="/bowls/home.jpg"
            alt="Açaí bowl topped with strawberries and blueberries"
            onError={(e) => (e.currentTarget.hidden = true)}
          />
          <span className="hint">[ hero photography ]</span>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        {/* duplicated once so the -50% translate loops seamlessly */}
        <div>
          {[...TICKER, ...TICKER].map((t, i) => (
            <b key={i}>{t}</b>
          ))}
        </div>
      </div>

      <section className="sec wrap">
        <div className="eyebrow">The idea</div>
        <h2 style={{ margin: "24px 0 0", maxWidth: "20ch" }}>
          Every bowl is a reason to slow down.
        </h2>
        <p className="lede" style={{ marginTop: 20 }}>
          A date with your partner, your friends, or simply yourself. Either
          way, here's what you get.
        </p>
        <div className="grid" style={{ marginTop: 44 }}>
          {PERKS.map((p) => (
            <div key={p.title} className="card hover">
              <span className="num">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap sec-b">
        <Link to="/menu" className="band">
          <div>
            <div className="eyebrow">The collection</div>
            <h2>
              Discover
              <br />
              the bowls
            </h2>
          </div>
          <span className="go">View menu →</span>
        </Link>
      </section>
    </main>
  );
}
