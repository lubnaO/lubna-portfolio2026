import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FiMenu, FiX } from "react-icons/fi";
import {links} from '../../Data/data'
import { motion } from "motion/react";
export default function Navbar() {
  let [open, setOpen] = useState(false);
  let [logo,setLogo] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setLogo(window.scrollY > 100);
    };
  }, []);
  return (
    <motion.header  initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} className={`main-header bg-ink/100 sticky top-0 z-50 text-ink-foreground ${logo ? "active": ""}`}>
      <Container className="position-relative d-flex align-items-center" style={{ minHeight: "5rem" }}>
      
         <p className={`logo mb-1 fw-bolder   ${logo? "active": ''}`} style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>
              لبنى<span style={{ color: "var(--accent)" }}>.</span>
         </p>

        <nav className="d-none mx-auto d-md-flex align-items-center gap-4 rounded-pill bg-ink/70 px-4 py-2 fw-bold shadow-lg backdrop-blur-xl" aria-label="التنقل الرئيسي">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link-anim text-decoration-none">
              {label}
            </a>
          ))}
          <a href="#contact" className="btn-gradient-pill">نشتغل سوا</a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="فتح القائمة"
          className="d-md-none btn-icon-square position-absolute"
          style={{ left: "1rem", top: "50%", transform: "translateY(-50%)" }}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </Container>

      {open && (
        <div className="d-md-none border-top border-dark-border bg-ink px-4 py-4 text-ink-foreground  " style={{}}>
          <div className="d-flex flex-column gap-3 fw-bold p-3">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-decoration-none text-ink-foreground">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
