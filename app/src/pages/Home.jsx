import { Link } from "react-router-dom";
import { BOWLS } from "../bowls.js";

const PERKS = [
  {
    ico: "🎨",
    title: "Made your way",
    body: "Pick any four toppings from a whole spread of fruit, crunch and superfoods. Your bowl, your rules.",
  },
  {
    ico: "🎒",
    title: "Take it anywhere",
    body: "Sealed for the go — lecture break, gym bag, picnic mat, or your desk at 2am.",
  },
  {
    ico: "⚡",
    title: "Made to order",
    body: "Nothing pre-scooped, nothing sitting out. Your bowl gets built the second you walk in.",
  },
  {
    ico: "🫶",
    title: "Pick-up only",
    body: "We don't deliver, because freshness doesn't survive the trip. Come say hi instead.",
  },
];

const TICKER = [
  "Take a date anywhere",
  "Made to order",
  "Pick-up only",
  "Bangsar, KL",
  "Open 8–18h daily",
];

export default function Home() {
  return (
    <main>
      <section className="hero wrap split">
        <div className="up">
          <div className="eyebrow">🫐 Açaí Date</div>
          <h1 style={{ marginTop: 22 }}>
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
            <Link to="/menu" className="btn">
              See the bowls →
            </Link>
            <Link to="/contact" className="btn ghost">
              Where to find us
            </Link>
          </div>
          <div className="stickers">
            <span className="sticker">4 toppings, your call</span>
            <span className="sticker b">Pick-up only</span>
          </div>
        </div>
        <div className="heroart">
          <div className="fruit">🍧</div>
          <span className="chip">Blended fresh 💜</span>
          <span className="chip">Any 4 toppings ✨</span>
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
        <div className="eyebrow">The Açaí Date idea</div>
        <h2 style={{ margin: "22px 0 0", maxWidth: "18ch" }}>
          Every bowl is a reason to slow down.
        </h2>
        <p className="lede" style={{ marginTop: 18 }}>
          A date with your partner, your friends, or simply yourself. Here's
          what you get either way.
        </p>
        <div className="grid" style={{ marginTop: 40 }}>
          {PERKS.map((p) => (
            <div key={p.title} className="card hover">
              <span className="ico">{p.ico}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap sec-b">
        <div className="eyebrow">The line-up</div>
        <h2 style={{ margin: "22px 0 34px" }}>Four bowls, zero bad choices</h2>
        <div className="grid">
          {BOWLS.map((b) => (
            <Link
              key={b.name}
              to="/menu"
              className="bowlcard"
              style={{
                "--tintA": b.tintA,
                "--tintB": b.tintB,
                "--bowlA": b.bowlA,
                "--bowlB": b.bowlB,
                "--accent": b.accent,
              }}
            >
              <div className="disc">{b.emoji}</div>
              <h3>{b.name}</h3>
              <span className="tag">{b.tag}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap sec-b">
        <Link to="/menu" className="band">
          <span className="em" aria-hidden="true">
            🥣
          </span>
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
