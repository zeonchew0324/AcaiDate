import { Link } from "react-router-dom";

export default function Story() {
  return (
    <main>
      <section className="wrap top">
        <div className="eyebrow in">Chapter 01 — Origin</div>
        <h1 className="up" style={{ marginTop: 26 }}>
          Our Story
        </h1>
        <p className="lede" style={{ marginTop: 24, fontSize: 20 }}>
          It began with a single bowl, shared between two people who couldn't
          agree on anything except this.
        </p>
      </section>

      <section className="sec wrap split">
        <div>
          <div className="eyebrow">The first bowl</div>
          <h2 style={{ margin: "24px 0 20px" }}>One spoonful, total silence</h2>
          <p>
            We found açaí the way most people do — far from home, tired, and
            unprepared for how good something so simple could be. One spoonful
            and the conversation stopped.
          </p>
          <p>
            Açaí Date is our attempt to bottle that pause: the moment a bowl
            arrives and the table goes quiet. No shortcuts, no compromises —
            only the fruit, treated with the patience it deserves.
          </p>
        </div>
        <div className="photo">
          <span className="hint">[ founders / first shop ]</span>
        </div>
      </section>

      <section className="wrap">
        <div className="quote">
          <p>We don't sell açaí. We sell the ten minutes you spend with it.</p>
          <div className="by">The two of us, still arguing</div>
        </div>
      </section>

      <section className="sec wrap split">
        <div className="photo" style={{ order: 2 }}>
          <span className="hint">[ the craft ]</span>
        </div>
        <div>
          <div className="eyebrow">The counter today</div>
          <h2 style={{ margin: "24px 0 20px" }}>Small on purpose</h2>
          <p>
            One counter. One fruit. A short menu we'd happily eat every day. We
            kept the shop small on purpose — small enough to recognise your
            order, large enough to do it perfectly.
          </p>
          <Link to="/menu" className="btn" style={{ marginTop: 28 }}>
            See the menu →
          </Link>
        </div>
      </section>
    </main>
  );
}
