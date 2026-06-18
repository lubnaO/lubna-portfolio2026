import React from 'react'
import SkillImages from './sections/SkillImages'
import { motion } from 'motion/react'
export const SkillsCard = ({items, title}) => {
  return (
 <motion.div  initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:1}}} className="skills-panel h-100">
      <h3 className="skills-panel-title">{title}</h3>
      <div
        className="d-flex flex-wrap gap-3 justify-content-center">
        {items.map((s) => (
          <SkillImages key={s.name} name={s.name} Icon={s.Icon}/>
        ))}
      </div>
    </motion.div>
  )
}
