import { motion } from "motion/react";
import { skills } from "../../Data/data";
import { useState } from "react";

export default function CardBanner() {
const theSkills = [...skills, ...skills];
  return (
    <div className="skills-marquee mt-5" dir="ltr">
      <motion.div
        className="d-flex"
        style={{ width: "max-content", flexWrap: "nowrap" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "loop" }}
     >
        {theSkills.map((element, i) => (
          <article   key={`${element.title}-${i}`} className="skill-card">
            <div  className="d-flex align-items-start justify-content-between mb-3">
                 <element.Icon size={22} style={{ color: "var(--primary)" }} />
              <span className="fw-bold text-muted-foreground" style={{ fontSize: "10px" }}>
                0{(i % skills.length) + 1}
              </span>
            </div>
            <h3 className="fw-bolder  mb-1" style={{ fontSize: "1.15rem" }}>{element.title}</h3>
            <p className="mb-0 text-end" style={{ fontSize: "0.8rem" }}>{element.note}</p>
          </article>
        ))}
      </motion.div>
    </div>
  );
}