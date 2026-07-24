import { Link } from "react-router-dom";
import { css } from "../css.js";

export default function Story() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section
        style={css(
          "padding: clamp(70px, 11vw, 150px) clamp(40px, 7vw, 110px) clamp(40px, 5vw, 70px)",
        )}
      >
        <div
          style={css(
            "font-size: 11px; letter-spacing: 0.4em; color: #E5189A; text-transform: uppercase; margin-bottom: 28px; animation: vlFade 1s ease both",
          )}
        >
          Chapter 01 — Origin
        </div>
        <h1
          style={css(
            "font-family: 'Quicksand', sans-serif; font-weight: 500; color: #3B1E4E; font-size: clamp(44px, 7vw, 104px); line-height: 1.02; margin: 0; animation: vlFadeUp 1s ease both",
          )}
        >
          Our Story
        </h1>
        <p
          style={css(
            "font-family: 'Quicksand', sans-serif; font-style: italic; font-size: clamp(18px, 2.2vw, 28px); color: #5A4F63; max-width: 620px; line-height: 1.5; margin: 34px 0 0",
          )}
        >
          It began with a single bowl, shared between two people who couldn't
          agree on anything except this.
        </p>
      </section>

      {/* ROW 1: text + image */}
      <section
        style={css(
          "display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: clamp(36px, 5vw, 80px); align-items: center; padding: clamp(40px, 6vw, 90px) clamp(40px, 7vw, 110px)",
        )}
      >
        <div style={css("max-width: 460px")}>
          <div
            style={css(
              "font-size: 12.5px; letter-spacing: 0.3em; color: #3B1E4E; text-transform: uppercase; margin-bottom: 20px",
            )}
          >
            The First Bowl
          </div>
          <p
            style={css(
              "font-size: 17px; font-weight: 400; line-height: 1.95; color: #4A4053; margin: 0 0 20px",
            )}
          >
            We found açaí the way most people do — far from home, tired, and
            unprepared for how good something so simple could be. One spoonful
            and the conversation stopped.
          </p>
          <p
            style={css(
              "font-size: 17px; font-weight: 400; line-height: 1.95; color: #4A4053; margin: 0",
            )}
          >
            Açaí Date is our attempt to bottle that pause: the moment a bowl
            arrives and the table goes quiet. No shortcuts, no compromises —
            only the fruit, treated with the patience it deserves.
          </p>
        </div>
        <div
          style={css(
            "position: relative; height: clamp(320px, 38vw, 520px); background: repeating-linear-gradient(135deg, #efe9f3, #efe9f3 16px, #e9e1ef 16px, #e9e1ef 32px); border: 1px solid #E6DEEC",
          )}
        >
          <span
            style={css(
              "position: absolute; bottom: 16px; left: 18px; font-family: ui-monospace, Menlo, monospace; font-size: 11px; color: #9A8BA6",
            )}
          >
            [ editorial — founders / first shop ]
          </span>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section
        style={css(
          "padding: clamp(70px, 9vw, 130px) clamp(40px, 7vw, 110px); text-align: center",
        )}
      >
        <p
          style={css(
            "font-family: 'Quicksand', sans-serif; font-weight: 500; font-size: clamp(26px, 4vw, 54px); line-height: 1.3; color: #3B1E4E; max-width: 900px; margin: 0 auto",
          )}
        >
          “We don't sell açaí. We sell the ten minutes you spend with it.”
        </p>
      </section>

      {/* ROW 2: image + text (reversed) */}
      <section
        style={css(
          "display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: clamp(36px, 5vw, 80px); align-items: center; padding: clamp(40px, 6vw, 90px) clamp(40px, 7vw, 110px) clamp(80px, 11vw, 150px)",
        )}
      >
        <div
          style={css(
            "position: relative; height: clamp(320px, 38vw, 520px); background: linear-gradient(157deg, #5B1A8A 0%, #3B1E4E 52%, #2A1438 100%); order: 2",
          )}
        >
          <div
            style={css(
              "position: absolute; inset: 0; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), transparent 60%)",
            )}
          ></div>
          <span
            style={css(
              "position: absolute; bottom: 16px; left: 18px; font-family: ui-monospace, Menlo, monospace; font-size: 11px; color: rgba(255,255,255,0.42)",
            )}
          >
            [ editorial — the craft ]
          </span>
        </div>
        <div style={css("max-width: 460px")}>
          <div
            style={css(
              "font-size: 12.5px; letter-spacing: 0.3em; color: #3B1E4E; text-transform: uppercase; margin-bottom: 20px",
            )}
          >
            The Counter Today
          </div>
          <p
            style={css(
              "font-size: 17px; font-weight: 400; line-height: 1.95; color: #4A4053; margin: 0 0 20px",
            )}
          >
            One counter. One fruit. A short menu we'd happily eat every day. We
            kept the shop small on purpose — small enough to recognise your
            order, large enough to do it perfectly.
          </p>
          <Link to="/menu" className="cta" style={css("margin-top: 12px")}>
            See the Menu <span style={css("font-size: 16px")}>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
