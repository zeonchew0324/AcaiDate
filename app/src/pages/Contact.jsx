import { useState } from "react";
import { css } from "../css.js";
import "./contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // no backend — form only shows the thank-you state; wire an endpoint when one exists
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please complete every field before sending.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <main>
      {/* HEADER */}
      <section
        style={css(
          "padding: clamp(70px, 11vw, 150px) clamp(40px, 7vw, 110px) clamp(20px, 3vw, 40px)",
        )}
      >
        <div
          style={css(
            "font-size: 11px; letter-spacing: 0.4em; color: #E5189A; text-transform: uppercase; margin-bottom: 28px; animation: vlFade 1s ease both",
          )}
        >
          Visit the Atelier
        </div>
        <h1
          style={css(
            "font-family: 'Quicksand', sans-serif; font-weight: 500; color: #3B1E4E; font-size: clamp(44px, 7vw, 104px); line-height: 1.02; margin: 0; animation: vlFadeUp 1s ease both",
          )}
        >
          Contact
        </h1>
        <p
          style={css(
            "font-family: 'Quicksand', sans-serif; font-style: italic; font-size: clamp(17px, 2vw, 26px); color: #5A4F63; max-width: 560px; line-height: 1.5; margin: 30px 0 0",
          )}
        >
          Pick-up only. Come find us — your bowl is made the moment you arrive.
        </p>
      </section>

      {/* INFO GRID */}
      <section
        style={css(
          "display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); border-top: 1px solid #ECE6F0; border-bottom: 1px solid #ECE6F0",
        )}
      >
        <div
          style={css(
            "padding: clamp(34px, 4vw, 52px) clamp(36px, 5vw, 64px); border-right: 1px solid #ECE6F0",
          )}
        >
          <div
            style={css(
              "font-size: 11px; letter-spacing: 0.3em; color: #8B7D95; text-transform: uppercase; margin-bottom: 16px",
            )}
          >
            Address
          </div>
          <p
            style={css(
              "font-size: 17px; font-weight: 400; line-height: 1.8; color: #3B1E4E; margin: 0",
            )}
          >
            G-12, Jalan Telawi 3<br />
            Bangsar, 59100 Kuala Lumpur
          </p>
        </div>
        <div
          style={css(
            "padding: clamp(34px, 4vw, 52px) clamp(36px, 5vw, 64px); border-right: 1px solid #ECE6F0",
          )}
        >
          <div
            style={css(
              "font-size: 11px; letter-spacing: 0.3em; color: #8B7D95; text-transform: uppercase; margin-bottom: 16px",
            )}
          >
            Hours
          </div>
          <p
            style={css(
              "font-size: 17px; font-weight: 400; line-height: 1.8; color: #3B1E4E; margin: 0",
            )}
          >
            Monday – Sunday
            <br />
            8:00 – 18:00
          </p>
        </div>
        <div
          style={css(
            "padding: clamp(34px, 4vw, 52px) clamp(36px, 5vw, 64px); border-right: 1px solid #ECE6F0",
          )}
        >
          <div
            style={css(
              "font-size: 11px; letter-spacing: 0.3em; color: #8B7D95; text-transform: uppercase; margin-bottom: 16px",
            )}
          >
            Telephone
          </div>
          <p
            style={css(
              "font-size: 17px; font-weight: 400; line-height: 1.8; color: #3B1E4E; margin: 0",
            )}
          >
            +60 3-1234 5678
          </p>
        </div>
        <div
          style={css("padding: clamp(34px, 4vw, 52px) clamp(36px, 5vw, 64px)")}
        >
          <div
            style={css(
              "font-size: 11px; letter-spacing: 0.3em; color: #8B7D95; text-transform: uppercase; margin-bottom: 16px",
            )}
          >
            Email
          </div>
          <p
            style={css(
              "font-size: 17px; font-weight: 400; line-height: 1.8; color: #3B1E4E; margin: 0",
            )}
          >
            hello@acaidate.my
          </p>
        </div>
      </section>

      {/* MAP + FORM */}
      <section
        style={css(
          "display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: clamp(40px, 5vw, 80px); padding: clamp(56px, 8vw, 110px) clamp(40px, 7vw, 110px)",
        )}
      >
        <div>
          <div
            style={css(
              "font-size: 12.5px; letter-spacing: 0.3em; color: #3B1E4E; text-transform: uppercase; margin-bottom: 22px",
            )}
          >
            Find Us
          </div>
          <div
            style={css(
              "position: relative; height: clamp(300px, 40vw, 460px); background: repeating-linear-gradient(135deg, #efe9f3, #efe9f3 16px, #e9e1ef 16px, #e9e1ef 32px); border: 1px solid #E6DEEC; display: flex; align-items: center; justify-content: center",
            )}
          >
            <div
              style={css(
                "width: 14px; height: 14px; background: #3B1E4E; transform: rotate(45deg); box-shadow: 0 6px 20px rgba(59,30,78,0.4)",
              )}
            ></div>
            <span
              style={css(
                "position: absolute; bottom: 16px; left: 18px; font-family: ui-monospace, Menlo, monospace; font-size: 11px; color: #9A8BA6",
              )}
            >
              [ embedded map — Bangsar, Kuala Lumpur ]
            </span>
          </div>
        </div>

        <div>
          <div
            style={css(
              "font-size: 12.5px; letter-spacing: 0.3em; color: #3B1E4E; text-transform: uppercase; margin-bottom: 22px",
            )}
          >
            Write to Us
          </div>
          {submitted ? (
            <div
              style={css("padding: 40px 0; animation: vlFade .5s ease both")}
            >
              <p
                style={css(
                  "font-family: 'Quicksand', sans-serif; font-size: 28px; color: #3B1E4E; margin: 0 0 14px",
                )}
              >
                Thank you.
              </p>
              <p
                style={css(
                  "font-size: 16px; font-weight: 400; line-height: 1.8; color: #5A4F63; margin: 0",
                )}
              >
                We've received your note and will reply within a day. See you
                soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              style={css("display: flex; flex-direction: column; gap: 30px")}
            >
              <div
                style={css("display: flex; flex-direction: column; gap: 9px")}
              >
                <label className="fieldlabel" htmlFor="f-name">
                  Name
                </label>
                <input
                  className="field"
                  id="f-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div
                style={css("display: flex; flex-direction: column; gap: 9px")}
              >
                <label className="fieldlabel" htmlFor="f-email">
                  Email
                </label>
                <input
                  className="field"
                  id="f-email"
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div
                style={css("display: flex; flex-direction: column; gap: 9px")}
              >
                <label className="fieldlabel" htmlFor="f-message">
                  Message
                </label>
                <textarea
                  className="field"
                  id="f-message"
                  rows="3"
                  placeholder="A question, a reservation for a group, a hello…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {error && (
                <div
                  style={css(
                    "font-size: 13px; letter-spacing: 0.04em; color: #9B4A4A",
                  )}
                >
                  {error}
                </div>
              )}
              <button type="submit" className="send">
                Send Note
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
