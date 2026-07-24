import { useEffect, useRef, useState } from "react";
import "./menu.css";

const THEMES = [
  {
    title: "Basic Bitch",
    body: "Banana, blueberries, kiwi, goji berries, cacao nibs.",
    tintA: "#FCE9F4",
    tintB: "#F8D6EC",
    blobA: "#e768b8",
    blobB: "#923d72",
    thumbA: "#F472C0",
    thumbB: "#B3127A",
    accent: "#E5189A",
  },
  {
    title: "The Crunch Situation",
    body: "Lotus crumbs, Oreo crumbs, sunflower & pumpkin seeds, cacao nibs.",
    tintA: "#F0E8FA",
    tintB: "#E4D5F5",
    blobA: "#5B1A8A",
    blobB: "#34104F",
    thumbA: "#9B6BD8",
    thumbB: "#4A1370",
    accent: "#5B1A8A",
  },
  {
    title: "Fruitationship",
    body: "Dragon fruit, kiwi, blueberries, banana, goji berries.",
    tintA: "#F3ECFB",
    tintB: "#E9DBF8",
    blobA: "#8B3FD9",
    blobB: "#5B1A8A",
    thumbA: "#B98AE8",
    thumbB: "#6E2BB0",
    accent: "#8B3FD9",
  },
  {
    title: "My Ideal Type",
    body: "Your bowl, your rules — choose any four toppings.",
    tintA: "#F8E9F2",
    tintB: "#F0D7E7",
    blobA: "#A11E76",
    blobB: "#3B1E4E",
    thumbA: "#D85FA8",
    thumbB: "#7A1F5C",
    accent: "#B0247F",
  },
];

const slideVars = (t) => ({
  "--tintA": t.tintA,
  "--tintB": t.tintB,
  "--blobA": t.blobA,
  "--blobB": t.blobB,
  "--accent": t.accent,
});
const thumbVars = (t) => ({
  "--thumbA": t.thumbA,
  "--thumbB": t.thumbB,
  "--accent": t.accent,
});

export default function Menu() {
  const [active, setActive] = useState(0);
  const frames = useRef([]);

  const playIn = (i, delay = 0) => {
    const el = frames.current[i];
    if (!el || !el.animate) return;
    el.animate(
      [
        { transform: "translateY(500px) rotate(-90deg)", opacity: 0 },
        { transform: "translateY(0) rotate(0deg)", opacity: 1 },
      ],
      { duration: 800, easing: "ease-out", fill: "both", delay },
    );
  };
  const pushOut = (i) => {
    const el = frames.current[i];
    if (!el || !el.animate) return;
    el.animate(
      [
        { transform: "translateY(0) rotate(0deg)", opacity: 1 },
        { transform: "translateY(500px) rotate(90deg)", opacity: 0 },
      ],
      { duration: 600, easing: "ease-in", fill: "both" },
    );
  };
  const select = (i) => {
    if (i === active) {
      playIn(i);
      return;
    }
    pushOut(active);
    setActive(i);
    requestAnimationFrame(() => playIn(i, 280));
  };

  // roll the first bowl in on mount
  useEffect(() => {
    requestAnimationFrame(() => playIn(0));
  }, []);

  const thumbRow = () =>
    THEMES.map((t, i) => (
      <button
        key={i}
        className="thumb"
        data-i={i}
        aria-label={t.title}
        style={thumbVars(t)}
        onClick={() => select(i)}
      ></button>
    ));

  return (
    <main className="flush">
      <section className="hero" data-active={active}>
        {THEMES.map((t, i) => (
          <div key={i} className="slide" data-i={i} style={slideVars(t)}>
            <div className="blob"></div>
            <div className="content">
              <div className="eyebrow">Açaí Date · The Bowls</div>
              <h1 className="bowl-name">{t.title}</h1>
              <p className="desc">{t.body}</p>
              <div className="thumbrow">{thumbRow()}</div>
              <div className="note">Pick-up only — take your date anywhere</div>
            </div>
          </div>
        ))}

        <div className="bowls">
          {THEMES.map((t, i) => (
            <div
              key={i}
              className="bowlframe"
              ref={(el) => (frames.current[i] = el)}
              style={slideVars(t)}
            >
              <div className="ph">{t.title}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
