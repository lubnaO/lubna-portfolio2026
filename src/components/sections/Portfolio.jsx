import { Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../../Data/data";
import { motion } from "motion/react";

export default function Portfolio() {
  return (
    <section
      id="work"
      className="animate-dark-gradient border-top border-bottom border-dark-border text-ink-foreground"
      style={{ padding: "6rem 1.25rem" }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
          className="d-flex align-items-end justify-content-between mb-5"
        >
          <div>
            <p className="fw-bold mb-2" style={{ color: "var(--accent)" }}>
              03 — أعمال
            </p>
            <h2 className="fw-bolder" style={{ fontSize: "clamp(2.8rem, 6vw, 3rem)" }}>
              أعمالي
            </h2>
          </div>
          {/* <span className="text-dark-muted small">06 مشاريع مختارة</span> */}
        </motion.div>

        <div className="d-flex flex-column gap-5">
          {projects.map((project, i) => (
            <Row
              key={project.id}
              className={`g-4 align-items-center project-row ${i % 2 ? "flex-lg-row-reverse" : ""}`}
            >
              <Col lg={7}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                  className="position-relative overflow-hidden rounded-4 project-image-wrap"
                >
                  <img
                    src={project.images}
                    alt={`صورة مشروع ${project.projectName}`}
                    width={960}
                    height={480}
                    loading="lazy"
                    className="w-100 d-block project-image"
                    style={{ aspectRatio: "2/1", objectFit: "cover", objectPosition: project.pos }}
                  />
                </motion.div>
              </Col>
              <Col lg={5}>
              <motion.div   initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, scale: 1, transition: { duration: 3 } }}>
               <span
                  className="fw-bold text-uppercase"
                  style={{ fontSize: "0.90rem", color: "var(--accent)" }}
                >
                  0{i + 1} / {project.projectName}
                </span>
                <h2
                  className="fw-bolder text-dark-muted  mt-3"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 2rem)" }}
                >
                  {project.title}
                </h2>
                <p className="text-dark-muted mt-3" style={{ maxWidth: "28rem", lineHeight: 1.75 }}>
                  {project.description}
                </p>
                <div className="d-flex gap-2 flex-wrap mt-4">
                  {project.language.map((lang, index) => (
                    <span key={index} className="m-2 p-2 btn-lang">
                      {lang}
                    </span>
                  ))}
                </div>
                <div className="d-flex gap-3 mt-4">
                  <a
                    href={project.sourceCode}
                    aria-label="فتح Github"
                    className="btn-icon-square icon-hover-pop"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.livePreview}
                    aria-label="معاينة المشروع"
                    className="btn-icon-square icon-hover-pop"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <FiExternalLink size={24} />
                  </a>
                </div>
              </motion.div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
}
