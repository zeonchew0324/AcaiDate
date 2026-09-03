import { Link, NavLink } from "react-router-dom";
import { ORDER_URL } from "./order.js";

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
          <i></i> Açaí Date
        </Link>
        <nav className="navpills">
          {NAV.map(([to, label]) => (
            <NavLink key={to} to={to} end className="navlink">
              {label}
            </NavLink>
          ))}
        </nav>
        <a href={ORDER_URL} target="_blank" rel="noreferrer" className="btn sm">
          Order now
        </a>
      </header>

      {children}

      <footer className="foot">
        <div className="wrap">
          <div className="grid">
            <div>
              <div className="fbrand">Açaí Date</div>
              <p>Take a date anywhere.</p>
            </div>
            <div>
              <div className="k">Open daily</div>
              <p>
                Mon–Sun · 8am – 6pm
                <br />
                +60 3-1234 5678
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
