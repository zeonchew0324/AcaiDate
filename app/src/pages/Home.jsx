import { Link } from "react-router-dom";
import { css } from "../css.js";
import "./home.css";

export default function Home() {
  return (
    <main>
      {/* HERO: EDITORIAL */}
      <section
        style={css(
          "position: relative; min-height: 100vh; background: #FFFFFF; overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; padding: clamp(40px, 7vw, 110px)",
        )}
      >
        <div
          style={css(
            "position: absolute; top: -20%; right: -10%; width: 60%; height: 80%; background: radial-gradient(circle, rgba(91,26,138,0.05), transparent 70%); pointer-events: none",
          )}
        ></div>
        <div
          style={css(
            "position: absolute; top: clamp(40px,7vw,110px); left: clamp(40px,7vw,110px); font-size: 11px; letter-spacing: 0.4em; color: #E5189A; text-transform: uppercase; animation: vlFade 1.2s ease both",
          )}
        >
          Açaí Date · Take a Date Anywhere
        </div>
        <div style={css("max-width: 760px; animation: vlFadeUp 1s ease both")}>
          <h1
            style={css(
              "font-family: 'Quicksand', sans-serif; font-weight: 500; color: #3B1E4E; font-size: clamp(40px, 6.6vw, 96px); line-height: 1.04; letter-spacing: 0.005em; margin: 0",
            )}
          >
            Grab a bowl,
            <br />
            <span style={css("font-style: italic")}>make it a date.</span>
          </h1>
          <p
            style={css(
              "color: #5A4F63; font-size: clamp(14px, 1.4vw, 17px); font-weight: 400; line-height: 1.8; letter-spacing: 0.02em; max-width: 440px; margin: 34px 0 0",
            )}
          >
            Healthy, customizable açaí bowls, made to grab and go. Take your
            date anywhere — a picnic, a study break, a gym recovery, or a quiet
            moment with yourself.
          </p>
          <div
            style={css(
              "display: flex; align-items: center; gap: 34px; margin-top: 48px; flex-wrap: wrap",
            )}
          >
            <Link to="/menu" className="cta">
              View the Menu <span style={css("font-size: 16px")}>→</span>
            </Link>
            <span
              style={css(
                "font-size: 11px; letter-spacing: 0.3em; color: #8B7D95; text-transform: uppercase",
              )}
            >
              Pick-up only
            </span>
          </div>
        </div>
        <div
          style={css(
            "position: absolute; bottom: 22px; right: 26px; font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace; font-size: 11px; letter-spacing: 0.04em; color: #B6AABF",
          )}
        >
          [ replace with hero photography ]
        </div>
      </section>

      {/* INTRO STRIP */}
      <section
        style={css(
          "padding: clamp(64px, 9vw, 140px) clamp(40px, 7vw, 110px); display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: clamp(36px, 5vw, 80px); align-items: start",
        )}
      >
        <div style={css("grid-column: 1 / -1; max-width: 620px")}>
          <div
            style={css(
              "font-size: 11px; letter-spacing: 0.4em; color: #E5189A; text-transform: uppercase; margin-bottom: 26px",
            )}
          >
            The Açaí Date Idea
          </div>
          <p
            style={css(
              "font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: clamp(24px, 3vw, 38px); line-height: 1.4; color: #2A1F33; margin: 0",
            )}
          >
            Every bowl is a reason to slow down — a date with your partner, your
            friends, or simply yourself.
          </p>
        </div>
        <div>
          <div
            style={css(
              "font-size: 12.5px; letter-spacing: 0.3em; color: #3B1E4E; text-transform: uppercase; margin-bottom: 14px",
            )}
          >
            Made Your Way
          </div>
          <p
            style={css(
              "font-size: 16px; font-weight: 400; line-height: 1.85; color: #5A4F63; margin: 0",
            )}
          >
            Build your own from a spread of fruits, crunch and superfoods. Any
            four toppings, your call.
          </p>
        </div>
        <div>
          <div
            style={css(
              "font-size: 12.5px; letter-spacing: 0.3em; color: #3B1E4E; text-transform: uppercase; margin-bottom: 14px",
            )}
          >
            Take It Anywhere
          </div>
          <p
            style={css(
              "font-size: 16px; font-weight: 400; line-height: 1.85; color: #5A4F63; margin: 0",
            )}
          >
            Sealed for the go — picnic, study session, gym bag or desk. Your
            date travels with you.
          </p>
        </div>
        <div>
          <div
            style={css(
              "font-size: 12.5px; letter-spacing: 0.3em; color: #3B1E4E; text-transform: uppercase; margin-bottom: 14px",
            )}
          >
            Pick-up Only
          </div>
          <p
            style={css(
              "font-size: 16px; font-weight: 400; line-height: 1.85; color: #5A4F63; margin: 0",
            )}
          >
            Made the moment you arrive. We don't deliver — freshness doesn't
            travel well.
          </p>
        </div>
      </section>

      {/* EDITORIAL IMAGE BAND */}
      <section
        style={css(
          "padding: 0 clamp(40px, 7vw, 110px) clamp(64px, 9vw, 140px)",
        )}
      >
        <Link
          to="/menu"
          className="band"
          style={css(
            "text-decoration: none; position: relative; height: clamp(320px, 52vw, 620px); background: repeating-linear-gradient(135deg, #efe9f3, #efe9f3 16px, #e9e1ef 16px, #e9e1ef 32px); border: 1px solid #E6DEEC; display: flex; align-items: flex-end; justify-content: space-between; padding: clamp(28px, 4vw, 56px)",
          )}
        >
          <div>
            <div
              style={css(
                "font-size: 11px; letter-spacing: 0.4em; color: #E5189A; text-transform: uppercase; margin-bottom: 14px",
              )}
            >
              The Collection
            </div>
            <div
              style={css(
                "font-family: 'Quicksand', sans-serif; font-size: clamp(28px, 4vw, 52px); color: #3B1E4E; line-height: 1.1",
              )}
            >
              Discover the bowls
            </div>
          </div>
          <span
            style={css(
              "font-size: 13px; letter-spacing: 0.26em; color: #3B1E4E; text-transform: uppercase; white-space: nowrap",
            )}
          >
            View Menu →
          </span>
          <span
            style={css(
              "position: absolute; top: 18px; left: 20px; font-family: ui-monospace, Menlo, monospace; font-size: 11px; color: #9A8BA6",
            )}
          >
            [ editorial — signature bowl ]
          </span>
        </Link>
      </section>
    </main>
  );
}
