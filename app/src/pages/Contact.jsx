import { useState } from "react";

const INFO = [
  {
    ico: "📍",
    label: "Address",
    lines: ["G-12, Jalan Telawi 3", "Bangsar, 59100 Kuala Lumpur"],
  },
  { ico: "🕗", label: "Hours", lines: ["Monday – Sunday", "8:00 – 18:00"] },
  { ico: "📞", label: "Telephone", lines: ["+60 3-1234 5678"] },
  { ico: "💌", label: "Email", lines: ["hello@acaidate.my"] },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // no backend — form only shows the thank-you state; wire an endpoint when one exists
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please complete every field before sending.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <main>
      <section className="wrap top">
        <div className="eyebrow in">📍 Come find us</div>
        <h1 className="up" style={{ marginTop: 22 }}>
          Contact
        </h1>
        <p className="lede" style={{ marginTop: 20, fontSize: 20 }}>
          Pick-up only. Your bowl is made the moment you arrive.
        </p>
      </section>

      <section className="wrap" style={{ paddingTop: "clamp(36px,5vw,56px)" }}>
        <div className="grid">
          {INFO.map((i) => (
            <div key={i.label} className="card hover">
              <span className="ico">{i.ico}</span>
              <h3>{i.label}</h3>
              <p>
                {i.lines.map((l, k) => (
                  <span key={k}>
                    {l}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec wrap split">
        <div>
          <div className="eyebrow">Find us</div>
          <h2 style={{ margin: "20px 0 22px" }}>Bangsar, KL</h2>
          <div
            className="photo"
            style={{ minHeight: "clamp(260px,32vw,400px)" }}
          >
            <span className="big" aria-hidden="true">
              🗺️
            </span>
            <span className="hint">
              [ embedded map — Bangsar, Kuala Lumpur ]
            </span>
          </div>
        </div>

        <div>
          <div className="eyebrow">Write to us</div>
          <h2 style={{ margin: "20px 0 22px" }}>Say hi 👋</h2>
          {submitted ? (
            <div className="card in">
              <span className="ico">🎉</span>
              <h3>Thank you!</h3>
              <p>
                We've got your note and will reply within a day. See you at the
                counter.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="card">
              <div className="formrow">
                <label className="fieldlabel" htmlFor="f-name">
                  Name
                </label>
                <input
                  className="field"
                  id="f-name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={set("name")}
                />
              </div>
              <div className="formrow">
                <label className="fieldlabel" htmlFor="f-email">
                  Email
                </label>
                <input
                  className="field"
                  id="f-email"
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={set("email")}
                />
              </div>
              <div className="formrow">
                <label className="fieldlabel" htmlFor="f-message">
                  Message
                </label>
                <textarea
                  className="field"
                  id="f-message"
                  rows="3"
                  placeholder="A question, a group order, a hello…"
                  value={form.message}
                  onChange={set("message")}
                />
              </div>
              {error && <p className="err">{error}</p>}
              <button type="submit" className="btn" style={{ marginTop: 22 }}>
                Send note →
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
