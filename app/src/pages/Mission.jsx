import { Link } from "react-router-dom";
import { css } from "../css.js";

export default function Mission() {
  return (
    <main>
      {/* STATEMENT HERO */}
      <section
        style={css(
          "min-height: 86vh; display: flex; flex-direction: column; justify-content: center; padding: clamp(70px, 10vw, 150px) clamp(40px, 7vw, 110px)",
        )}
      >
        <div
          style={css(
            "font-size: 11px; letter-spacing: 0.4em; color: #E5189A; text-transform: uppercase; margin-bottom: 34px; animation: vlFade 1s ease both",
          )}
        >
          Our Mission
        </div>
        <h1
          style={css(
            "font-family: 'Quicksand', sans-serif; font-weight: 500; color: #3B1E4E; font-size: clamp(32px, 5.4vw, 84px); line-height: 1.18; max-width: 1000px; margin: 0; animation: vlFadeUp 1s ease both",
          )}
        >
          To prove that something this{" "}
          <span style={css("font-style: italic; color: #8B3FD9")}>
            good for you
          </span>{" "}
          can also feel like a{" "}
          <span style={css("font-style: italic; color: #E5189A")}>date</span> —
          one bowl, made properly, every single day.
        </h1>
      </section>

      {/* VALUES */}
      <section style={css("border-top: 1px solid #ECE6F0")}>
        <div
          style={css(
            "display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))",
          )}
        >
          <div
            style={css(
              "padding: clamp(40px, 5vw, 70px) clamp(36px, 5vw, 64px); border-right: 1px solid #ECE6F0; border-bottom: 1px solid #ECE6F0",
            )}
          >
            <div
              style={css(
                "font-family: 'Quicksand', sans-serif; font-size: 40px; color: #E5189A; margin-bottom: 22px",
              )}
            >
              01
            </div>
            <div
              style={css(
                "font-size: 13px; letter-spacing: 0.28em; color: #3B1E4E; text-transform: uppercase; margin-bottom: 16px",
              )}
            >
              Made Your Way
            </div>
            <p
              style={css(
                "font-size: 16px; font-weight: 400; line-height: 1.9; color: #5A4F63; margin: 0",
              )}
            >
              Choose any four toppings and build the bowl that is yours.
              Customization is the whole point.
            </p>
          </div>
          <div
            style={css(
              "padding: clamp(40px, 5vw, 70px) clamp(36px, 5vw, 64px); border-right: 1px solid #ECE6F0; border-bottom: 1px solid #ECE6F0",
            )}
          >
            <div
              style={css(
                "font-family: 'Quicksand', sans-serif; font-size: 40px; color: #E5189A; margin-bottom: 22px",
              )}
            >
              02
            </div>
            <div
              style={css(
                "font-size: 13px; letter-spacing: 0.28em; color: #3B1E4E; text-transform: uppercase; margin-bottom: 16px",
              )}
            >
              Make to Order
            </div>
            <p
              style={css(
                "font-size: 16px; font-weight: 400; line-height: 1.9; color: #5A4F63; margin: 0",
              )}
            >
              Nothing is pre-scooped or sitting out. Your bowl is built when you
              walk in — which is exactly why we don't deliver.
            </p>
          </div>
          <div
            style={css(
              "padding: clamp(40px, 5vw, 70px) clamp(36px, 5vw, 64px); border-bottom: 1px solid #ECE6F0",
            )}
          >
            <div
              style={css(
                "font-family: 'Quicksand', sans-serif; font-size: 40px; color: #E5189A; margin-bottom: 22px",
              )}
            >
              03
            </div>
            <div
              style={css(
                "font-size: 13px; letter-spacing: 0.28em; color: #3B1E4E; text-transform: uppercase; margin-bottom: 16px",
              )}
            >
              Take It Anywhere
            </div>
            <p
              style={css(
                "font-size: 16px; font-weight: 400; line-height: 1.9; color: #5A4F63; margin: 0",
              )}
            >
              Grab-and-go and sealed for the journey — a picnic, a study
              session, a gym recovery, or time with yourself.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING NOTE */}
      <section
        style={css(
          "padding: clamp(70px, 10vw, 140px) clamp(40px, 7vw, 110px); display: flex; flex-direction: column; align-items: flex-start; gap: 30px",
        )}
      >
        <p
          style={css(
            "font-family: 'Quicksand', sans-serif; font-style: italic; font-size: clamp(20px, 2.6vw, 34px); line-height: 1.5; color: #3B1E4E; max-width: 760px; margin: 0",
          )}
        >
          Pick-up only, always. Because the best thing we make can't survive the
          trip — and we'd never serve you anything less than its best.
        </p>
        <Link to="/contact" className="cta">
          Visit Us <span style={css("font-size: 16px")}>→</span>
        </Link>
      </section>
    </main>
  );
}
