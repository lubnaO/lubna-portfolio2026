import { Container } from "react-bootstrap";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FiArrowUpLeft } from "react-icons/fi";
import CV from '../../cv/cv.pdf'
import CardBanner from "./CardBanner";
import { motion } from "motion/react";

export default function Hero() {
  let openCV = () =>{
    window.open(CV)
  }
  return (
   <section id="home" className="animate-dark-gradient position-relative overflow-hidden border-bottom border-dark-border" style={{ padding: "5rem 1.80rem 2rem", minHeight:"85vh" }}>
    <div  className="position-absolute" style={{ left: "-10rem", top: "2rem", height: "30rem", width: "32rem", borderRadius: "50%", background: "color-mix(in oklch, var(--primary) 20%, transparent)", filter: "blur(80px)", zIndex: -1 }} />
      <Container>
        
        <motion.div initial={{opacity:0}} whileInView={{opacity:1,scale:1.25,transition:{duration:0.4}}} className="d-flex justify-content-around align-items-center mb-4 fw-bold text-dark-muted" style={{ fontSize: "0.72rem" }}>
          <span>متاحة لمشاريع جديدة — 2026</span>
          <span className="d-none d-sm-block">01 </span>
        </motion.div>

        <motion.div initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:0.8}}}  className="text-center mx-auto" style={{ maxWidth: "72rem" }}>
        <div className="d-flex flex-col md:flex-row  md:items-center md:justify-center">
       <p className="" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.15rem, 7.4vw, 3rem)", fontWeight: 800, lineHeight: 0.82, letterSpacing: "-0.025em", color: "var(--accent)", textTransform: "uppercase" }}>
           مطورة واجهات 
          </p>
          <span className="hidden md:block d-md- m-0 md:p-3 font-bold text-4xl  text-dark-muted">-</span>
          <p className=" " style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.15rem, 7.4vw, 3rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.025em", whiteSpace: "nowrap", color: "var(--accent)",textTransform: "uppercase" }}>
          لبنى العمودي 
          </p>
        </div>
     

          <motion.p initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:0.8}}}  className="text-dark-muted mx-auto mt-2" style={{ maxWidth: "640px", fontSize: "1.05rem", lineHeight: 1.7, animationDelay: "180ms" }}>
            مطورة واجهات ويب , بكالوريوس تقنية معلومات، مهتمة في تطوير المواقع و ببناء صفحات هبوط وتجارب رقمية .
          </motion.p>

          <motion.div initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:0.7}}} className="d-flex flex-column align-items-center gap-3 mt-4" style={{ animationDelay: "300ms" }}>
           
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
              <a href="#work" className="btn-gradient-pill d-inline-flex align-items-center gap-2" style={{ padding: "0.85rem 1.6rem", fontSize: "1rem" }}>
                 أعمالي <FiArrowUpLeft />
              </a>
              {/* <a href="#contact" onClick={openCV} className="btn-outline-pill d-inline-flex align-items-center gap-2" style={{ padding: "0.85rem 1.6rem", fontSize: "1rem" }}>
                 سيرتي الذاتية
              </a> */}
            </div>

            <div className="d-flex justify-content-center align-items-center gap-3 mt-2">
              <a href="https://github.com/lubnaO?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="Github" className="btn-icon-square icon-hover-pop">
                <FaGithub size={20} />
              </a>
              <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="btn-icon-square icon-hover-pop">
                <FaXTwitter size={20} />
              </a>
            </div>

          </motion.div>

          
        </motion.div>
      </Container>
      <CardBanner />
    </section>
  );
}