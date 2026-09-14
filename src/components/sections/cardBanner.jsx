import { motion } from "motion/react";
import { webSkills, otherSkills } from "../../Data/data";

export default function CardBanner() {
  const bannerSkills = [...webSkills, ...otherSkills];
  const theSkills = [...bannerSkills, ...bannerSkills];
  return (
    <div className="skills-marquee mt-5" dir="ltr">
      <motion.div
        className="d-flex"
        style={{ width: "max-content", flexWrap: "nowrap" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity, repeatType: "loop" }}
     >
        {theSkills.map((element, i) => (
          <article key={`${element.name}-${i}`} className="skill-card">
            <div  className="d-flex align-items-start justify-content-between mb-3">
                 <element.Icon size={22} style={{ color: "var(--primary)" }} />
              <span className="fw-bold text-muted-foreground" style={{ fontSize: "10px" }}>
                {String((i % bannerSkills.length) + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="fw-bolder text-end mb-1" style={{ fontSize: "1.15rem" }}>{element.name}</h3>
          </article>
        ))}
      </motion.div>
    </div>
  );
}
