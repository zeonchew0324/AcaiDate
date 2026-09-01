import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BOWLS } from "../bowls.js";

const vars = (b) => ({
  "--tintA": b.tintA,
  "--tintB": b.tintB,
  "--bowlA": b.bowlA,
  "--bowlB": b.bowlB,
  "--accent": b.accent,
});

export default function Menu() {
  const [active, setActive] = useState(0);
  const frames = useRef([]);

  const roll = (i, keyframes, opts) =>
    frames.current[i]?.animate?.(keyframes, {
      easing: "ease-out",
      fill: "both",
      ...opts,
    });
  const rollIn = (i, delay = 0) =>
    roll(
      i,
      [
        { transform: "translateY(500px) rotate(-90deg)", opacity: 0 },
        { transform: "translateY(0) rotate(0deg)", opacity: 1 },
      ],
      { duration: 800, delay },
    );
  const rollOut = (i) =>
    roll(
      i,
      [
        { transform: "translateY(0) rotate(0deg)", opacity: 1 },
        { transform: "translateY(500px) rotate(90deg)", opacity: 0 },
      ],
      { duration: 600, easing: "ease-in" },
    );

  const select = (i) => {
    if (i === active) return rollIn(i);
    rollOut(active);
    setActive(i);
    requestAnimationFrame(() => rollIn(i, 280));
  };

  // roll the first bowl in on mount
  useEffect(() => {
    requestAnimationFrame(() => rollIn(0));
  }, []);

  const bowl = BOWLS[active];

  return (
    <main>
      <section className="menuhero" style={vars(bowl)}>
        {BOWLS.map((b, i) => (
          <div
            key={b.name}
            className={"slide" + (i === active ? " on" : "")}
            style={vars(b)}
          />
        ))}

        <div className="wrap menugrid">
          <div>
            <div className="eyebrow">{bowl.n} · The bowls</div>
            <h1>{bowl.name}</h1>
            <p className="desc">{bowl.body}</p>

            <div className="chips">
              {BOWLS.map((b, i) => (
                <button
                  key={b.name}
                  className={"chip" + (i === active ? " on" : "")}
                  aria-pressed={i === active}
                  onClick={() => select(i)}
                >
                  {b.name}
                </button>
              ))}
            </div>

            <div className="menunote meta">
              Any four toppings · pick-up only · made when you arrive
            </div>
            <Link to="/contact" className="btn" style={{ marginTop: 30 }}>
              Come grab one →
            </Link>
          </div>

          <div className="bowls">
            {BOWLS.map((b, i) => (
              <div
                key={b.name}
                className={"bowlframe" + (i === active ? " on" : "")}
                ref={(el) => (frames.current[i] = el)}
                style={vars(b)}
              >
                <div className="bowl-outline"></div>
                <div className="bowl-photo">
                  {/* placeholder — swap for <img src={b.photo} alt={b.name} /> when bowl photos exist */}
                  <span>[ {b.name} ]</span>
                </div>
                <i className="bowl-diamond a"></i>
                <i className="bowl-diamond b"></i>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
