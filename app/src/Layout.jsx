import { Link, NavLink } from "react-router-dom";

const NAV = [
  ["/", "Home"],
  ["/menu", "Menu"],
  ["/story", "Our Story"],
  ["/mission", "Our Mission"],
  ["/contact", "Contact"],
];

export default function Layout({ children }) {
  return (
    <>
      <header className="topbar">
        <Link to="/" className="brand">
          <span>🫐</span> Açaí Date
        </Link>
        <nav className="navpills">
          {NAV.map(([to, label]) => (
            <NavLink key={to} to={to} end className="navlink">
              {label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn sm">
          Find us
        </Link>
      </header>

      {children}

      <footer className="foot">
        <div className="wrap">
          <div className="grid">
            <div>
              <h3>Açaí Date 🫐</h3>
              <p>Take a date anywhere.</p>
            </div>
            <div>
              <div className="k">Pick-up only</div>
              <p>
                G-12, Jalan Telawi 3
                <br />
                Bangsar, 59100 Kuala Lumpur
              </p>
            </div>
            <div>
              <div className="k">Open daily</div>
              <p>
                Mon–Sun · 8am – 6pm
                <br />
                +60 3-1234 5678
              </p>
            </div>
            <div>
              <div className="k">Say hi</div>
              <p>
                <a href="mailto:hello@acaidate.my">hello@acaidate.my</a>
              </p>
            </div>
          </div>
          <div className="copy">
            © 2026 Açaí Date · Made fresh when you arrive
          </div>
        </div>
      </footer>
    </>
  );
}
