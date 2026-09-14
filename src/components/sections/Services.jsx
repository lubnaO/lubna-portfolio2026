import { Container, Row, Col } from "react-bootstrap";
import { Services as services } from "../../Data/data";
import { motion } from "motion/react";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-surface text-surface-foreground"
      style={{ padding: "6rem 1.25rem" }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 2} }}
          className="d-flex align-items-end justify-content-between mb-5"
        >
          <div>
          <p className="fw-bold mb-2" style={{ color: "var(--accent)" }}>
            02 — خدمات
          </p>
          <h2
            id="services-title"
            className="fw-bolder"
            style={{ fontSize: "clamp(2.8rem, 6vw, 3rem)" }}
          >
            الخدمات
          </h2>
          </div>
        </motion.div>

        <Row className="g-3 g-md-4">
          {services.map((service) => {
            const Icon = service.Icon;

            return (
              <Col key={service.id} xs={12} md={4}>
                <motion.article
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
                  className="skills-panel h-100 text-center"
                >
                  <span
                    className="d-inline-flex align-items-center justify-content-center rounded-4 mb-3"
                    style={{
                      width: 64,
                      height: 64,
                      color: "#ffffff",
                      background: "var(--ink)",
                    }}
                  >
                    <Icon size={32} aria-hidden="true" />
                  </span>
                  <h5 className="">{service.title}</h5>
                  <p className="mb-0" style={{ lineHeight: 1.8, overflowWrap: "anywhere" }}>
                    {service.description}
                  </p>
                </motion.article>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
