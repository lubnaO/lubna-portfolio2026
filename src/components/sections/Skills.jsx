import { Container, Row, Col } from "react-bootstrap";
import {skills, webSkills, otherSkills} from '../../Data/data'
import { useState, useEffect } from "react";
import { SkillsCard } from "../SkillsCard";
import { motion } from "motion/react";
export default function Skills() {
  return (
    <section id="skills" className="bg-surface text-surface-foreground" style={{ padding: "6rem 1.25rem" }}>
      <Container>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:1}}} className="d-flex align-items-end justify-content-between mb-5">
          <div>
            <p className="fw-bold mb-2" style={{ color: "var(--accent)" }}>02 — تقنيات</p>
            <h2 className="fw-bolder" style={{ fontSize: "clamp(2.8rem, 6vw, 3rem)" }}>المهارات التقنية</h2>
          </div>
          {/* <span className="text-dark-muted small">06 مشاريع مختارة</span> */}
        </motion.div>

         <section
      id="skills"
      style={{
        padding: "6rem 1.25rem",
        background: "var(--surface)",
        color: "var(--surface-foreground)",
      }}
    >
        <Row className="g-4">
          <Col  initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} sm={6}>
            <SkillsCard title="التقنيات " items={webSkills} />
          </Col>
          <Col  initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} sm={6}>
            <SkillsCard title="أدوات التطوير" items={otherSkills} />
          </Col>
        </Row>
    </section>


      </Container>

    </section>
  );
}
