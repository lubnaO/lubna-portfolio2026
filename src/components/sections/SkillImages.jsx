import React from "react";
import { motion } from "motion/react";
const SkillImages = ({ name, Icon }) => {
  return (
    <motion.div  initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:1}}} className="skill-pill d-inline-flex align-items-center gap-2">
      <Icon size={22} style={{ color: "var(--primary)" }} />
      <span>{name}</span>
    </motion.div>
  );
};

export default SkillImages;
