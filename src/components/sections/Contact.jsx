import { useState, useRef } from "react";
import { Container, Form } from "react-bootstrap";
// import { FiSend } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { motion } from "motion/react";
export default function Contact() {
  const [sent, setSent] = useState(false);
  const form = useRef();
  const [formData, setFormData] = useState({
  from_name: "",
  from_email: "",
  from_number: "",
  from_message: "",

});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ctr4x23', 'template_9agi69l', form.current, {
        publicKey: 'JMvwFafFwiRBYkr1U',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSent(true)
          setFormData({from_name:'',from_email:'', from_number:'', from_message:''})
          setTimeout(() => {
            setSent(false)
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="bg-surface text-surface-foreground" style={{ padding: "6rem 1.25rem" }}>
      <Container style={{ maxWidth: "56rem" }}>
        <motion.div className="text-center" initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:1}}}>
          <p className="fw-bold text-muted-foreground">04 — تواصل</p>
          <h2 className="fw-bolder mt-2" style={{ fontSize: "clamp(2.8rem, 6vw, 2rem)" }}>نشتغل سوا</h2>
          <p className="text-muted-foreground mx-auto mt-3" style={{ maxWidth: "32rem" }}>
            عندك فكرة أو مشروع؟ أرسل لي التفاصيل، وبتواصل معاك!
          </p>
        </motion.div>

        <motion.form initial={{opacity:0}} whileInView={{opacity:1,scale:1,transition:{duration:2}}} ref={form} onSubmit={sendEmail} className="mt-5 rounded-4 border bg-card p-4 p-sm-5 shadow-sm contact-form" aria-label="نموذج التواصل">
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold small">الاسم</Form.Label>
            <Form.Control required name="from_name" onChange={handleChange} value={formData.from_name} type="text" placeholder="اسمك" className="contact-input" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold small">البريد الإلكتروني</Form.Label>
            <Form.Control required type="email" name="from_email" onChange={handleChange} value={formData.from_email} placeholder="name@example.com" className="contact-input" />
          </Form.Group>
             <Form.Group className="mb-4">
            <Form.Label className="fw-bold small">رقم التواصل </Form.Label>
            <Form.Control required type="number" name="from_number" onChange={handleChange} value={formData.from_number}  placeholder="05xxxxxxxx" className="contact-input" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="fw-bold small">الرسالة</Form.Label>
            <Form.Control  as="textarea" rows={4} required name="from_message" onChange={handleChange} value={formData.from_message}  placeholder="فكرة عن مشروعك..." className="contact-input" />
          </Form.Group>
          <div className="text-center">
            <button type="submit" value="send" className="btn-gradient-pill d-inline-flex align-items-center gap-2" style={{ padding: "0.85rem 1.8rem" }}>
              إرسال  
            </button>
            {sent && <p role="status" className="mt-3 fw-bold text-ink">  شكراً لك! تم استلام رسالتك , وراح اتواصل معاك!</p>}
          </div>
        </motion.form>
      </Container>
    </section>
  );
}
