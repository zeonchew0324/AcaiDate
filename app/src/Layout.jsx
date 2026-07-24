import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV = [
  ["/", "home", "Home"],
  ["/menu", "menu", "Menu"],
  ["/story", "story", "Our Story"],
  ["/mission", "mission", "Our Mission"],
  ["/contact", "contact", "Contact"],
];

function Nav({ active }) {
  return NAV.map(([to, key, label]) => (
    <Link
      key={key}
      to={to}
      className={"navlink" + (key === active ? " active" : "")}
    >
      <span className="mark"></span>
      {label}
    </Link>
  ));
}

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const active = (NAV.find(([to]) => to === pathname) || NAV[0])[1];

  const openMenu = () => document.body.classList.add("menu-open");
  const closeMenu = () => document.body.classList.remove("menu-open");

  // close the overlay on route change and when leaving mobile width
  useEffect(() => {
    closeMenu();
    const mq = matchMedia("(max-width: 899px)");
    const onChange = () => closeMenu();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [pathname]);

  return (
    <>
      <aside className="sidebar">
        <div>
          <Link to="/" className="logo">
            <div className="logo-row">
              <div className="diamond"></div>
              <div className="wordmark">Açaí Date</div>
            </div>
            <div className="tagline">Take a Date Anywhere</div>
          </Link>
          <nav>
            <Nav active={active} />
          </nav>
        </div>
        <div className="sidebar-foot">
          <div className="pickup">Pick-up only</div>
          <div>Bangsar, Kuala Lumpur</div>
          <div>Mon–Sun · 8–18h</div>
          <div className="copy">© 2026 Açaí Date</div>
        </div>
      </aside>

      <header className="mobilebar">
        <button className="hamburger" aria-label="Menu" onClick={openMenu}>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="wordmark-sm">
          Açaí Date
        </Link>
      </header>

      <div className="mobilemenu">
        <nav>
          <Nav active={active} />
        </nav>
        <button className="close" onClick={closeMenu}>
          Close
        </button>
        <div className="menunote">Pick-up only · Bangsar, KL</div>
      </div>

      {children}
    </>
  );
}
