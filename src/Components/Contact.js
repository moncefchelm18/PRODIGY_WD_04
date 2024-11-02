import { useState } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";

import SectionWithFade from "./OtherComponents/SectionWithFade";
import InputField from "./OtherComponents/InputField";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    emailSubject: "",
    message: "",
    verificationCode: "", // For storing generated code
    inputVerificationCode: "", // For user input code
  });
  const [isVerifying, setIsVerifying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    console.log("xxx", formData);

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
  };
  const sendVerificationEmail = async (verificationCode) => {
    try {
      await emailjs.send(
        "service_6lz31ds",
        "template_9ieq6ei",
        {
          to_email: formData.email,
          to_name: formData.fullName,
          verification_code: verificationCode,
        },
        "zlmi8_CKHFHhPTd-J"
      );
      setIsVerifying(true);
      setIsLoading(false);
      alert("Code de vérification envoyé à votre email.");
    } catch (error) {
      console.error("Verification failed:", error);
      setIsLoading(false);
      alert("Erreur lors de l'envoi du code de vérification.");
    }
  };
  const sendFinalMessage = async () => {
    try {
      await emailjs.send(
        "service_6lz31ds",
        "template_twid075",
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
          subject: formData.emailSubject,
          mobile_number: formData.mobileNumber,
          reply_to: formData.email,
        },
        "zlmi8_CKHFHhPTd-J"
      );
      setIsLoading(false);
      alert("Message envoyé avec succès !");
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        mobileNumber: "",
        emailSubject: "",
        message: "",
        verificationCode: "",
        inputVerificationCode: "",
      });
      setIsVerifying(false);
    } catch (error) {
      console.error("Failed to send message:", error);
      setIsLoading(false);
      alert("Erreur lors de l'envoi du message.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);
    if (!isVerifying) {
      // First step: Send verification code
      const code = generateVerificationCode();
      setFormData((prev) => ({ ...prev, verificationCode: code }));
      await sendVerificationEmail(code);
    } else {
      // Second step: Verify code and send message
      if (formData.inputVerificationCode === formData.verificationCode) {
        console.log("Verification successful!");
        console.log("ppppp", formData);
        await sendFinalMessage();
      } else {
        console.log("ppppp", formData);
        alert("Code de vérification incorrect.");
      }
    }
  };

  return (
    <>
      <section className="contact" id="contact" ref={ref}>
        <SectionWithFade
          inView={inView}
          duration={1000}
          delay={250}
          distance={"25px"}
          direction={{ center: true }}
        >
          <h3 className="heading">
            Contactez <span>Moi !</span>
          </h3>
        </SectionWithFade>

        <form onSubmit={handleSubmit}>
          <div className="contact-container">
            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={550}
              distance={"25px"}
              direction={{ left: true }}
            >
              <div className="contact-infos">
                <InputField
                  type="text"
                  name="fullName"
                  placeholder="Nom Complet"
                  onChange={handleChange}
                  value={formData.fullName}
                  required
                />
                <InputField
                  type="email"
                  name="email"
                  placeholder="Adresse Email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
                <InputField
                  type="number"
                  name="mobileNumber"
                  placeholder="Numéro de Téléphone"
                  onChange={handleChange}
                  value={formData.mobileNumber}
                  required
                />
                <InputField
                  type="text"
                  name="emailSubject"
                  placeholder="Sujet de l'Email"
                  onChange={handleChange}
                  value={formData.emailSubject}
                  required
                />
              </div>
            </SectionWithFade>

            <SectionWithFade
              inView={inView}
              duration={1000}
              delay={450}
              distance={"25px"}
              direction={{ right: true }}
            >
              <div className="contact-message">
                <InputField
                  textarea
                  name="message"
                  placeholder="Votre Message"
                  onChange={handleChange}
                  value={formData.message}
                  required
                />
              </div>
            </SectionWithFade>

            {isLoading && <h3>Chargement...</h3>}

            {isVerifying && (
              <SectionWithFade
                inView={inView}
                duration={1000}
                delay={350}
                distance={"25px"}
                direction={{ bottom: true }}
              >
                <div className="verification-code">
                  <InputField
                    type="text"
                    name="inputVerificationCode"
                    placeholder="Entrez le code de vérification"
                    onChange={handleChange}
                    value={formData.inputVerificationCode}
                    required
                  />
                </div>
              </SectionWithFade>
            )}
          </div>

          <SectionWithFade
            inView={inView}
            duration={1000}
            delay={350}
            distance={"25px"}
            direction={{ bottom: true }}
          >
            <div className="btn-box">
              <button type="submit" className="btn">
                {isVerifying ? "Vérifier et Envoyer" : "Envoyer"}
              </button>
            </div>
          </SectionWithFade>
        </form>
      </section>
    </>
  );
};

export default Contact;
