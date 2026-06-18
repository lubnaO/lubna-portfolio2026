import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { motion } from "motion/react";
export default function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground overflow-hidden" style={{ padding: "5rem 1.25rem 2rem" }}>
      <Container>
        <Row className="border-top border-dark-border pt-4 g-4 align-items-center">
          <Col md={4}>
          <motion.div  initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:1}}}>
            <p className="mb-1 fw-bolder" style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}>
              لبنى<span style={{ color: "var(--accent)" }}>.</span>
            </p>
            <p className="text-dark-muted small mb-0">أصمم. أطوّر. أطلق.</p>
          </motion.div>
          </Col>
          <Col md={4}>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:2}}}>
          <nav className="d-flex flex-wrap gap-3 fw-bold justify-content-md-center" aria-label="روابط التذييل">
              <a href="#home" className="text-decoration-none text-dark-muted">الرئيسية</a>
              <a href="#skills" className="text-decoration-none text-dark-muted">المهارات</a>
              <a href="#work" className="text-decoration-none text-dark-muted">المشاريع</a>
              <a href="#contact" className="text-decoration-none text-dark-muted">تواصل </a>
            </nav>
          </motion.div>
          </Col>
          <Col md={4} className="d-flex gap-2 justify-content-md-end">
          <motion.div initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:2}}}>
          <a href="https://github.com/lubnaO?tab=repositories" aria-label="Github" className="btn-icon-square icon-hover-pop"><FaGithub size={18} /></a>
            <a href="https://x.com/Lubna_977" aria-label="X" className="btn-icon-square icon-hover-pop"><FaXTwitter size={18} /></a>
            <a href="https://www.linkedin.com/in/lubna-alamoudi-3562191a0/?skipRedirect=true" aria-label="LinkedIn" className="btn-icon-square icon-hover-pop"><FaLinkedin size={18} /></a>
          </motion.div>
          </Col>
        </Row>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} className="mt-5 border-top border-dark-border pt-3 text-center text-dark-muted small mb-0">
          © 2026 جميع الحقوق محفوظة
        </motion.p>
      </Container>
    </footer>
  );
}
