import { useTranslation } from "react-i18next";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CameraIcon,
  ShareIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const ContactUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSend = (e) => {
    e.preventDefault();

    // VALIDACIÓN
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please complete Name, Email and Phone.");
      return;
    }

    emailjs
      .send(
        "service_kqt40jo",
        "template_g6150cq",
        formData,
        "ByXNbTz6ZpCN0_R-G"
      )
      .then(() => {
        toast.success(
          "¡Tus datos han sido recibidos! Nos pondremos en contacto contigo."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error("¡Oops! Algo salió mal, intenta nuevamente.");
      });
  };

  const contacts = [
    {
      title: t("Phone"),
      value: "+1 (913) 944-1486",
      icon: <PhoneIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "tel:+19139441486",
    },
    {
      title: t("Email"),
      value: "guttersolutions115@gmail.com",
      icon: <EnvelopeIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "mailto:guttersolutions115@gmail.com",
    },
    {
      title: t("Address"),
      value: "123 Main Street, USA",
      icon: <MapPinIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "https://www.google.com/maps",
    },
    {
      title: "WhatsApp",
      value: "+1 (913) 944-1486",
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "https://wa.me/19139441486",
    },
    {
      title: "Instagram",
      value: "@mguttersolutions",
      icon: <CameraIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "https://instagram.com/mguttersolutions",
    },
    {
      title: "Facebook",
      value: "/mguttersolutions",
      icon: <ShareIcon className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "https://facebook.com/mguttersolutions",
    },
  ];

  return (
    <section id="contact" className="relative w-full min-h-screen bg-cover bg-center text-brand-white">
      {/* BACKGROUNDS */}
      <div
        className="hidden sm:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/ContactUs.png')",
        }}
      />
      <div
        className="block sm:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:"url('https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/ContactUsPhone.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          {t("Contact Us")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* CONTACT CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-light/25 rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-center hover:bg-brand-light/40 transition"
              >
                {c.icon}
                <h4 className="text-sm font-semibold">{c.title}</h4>
                <p className="text-xs text-brand-gray">{c.value}</p>
              </a>
            ))}
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-brand-light/20 rounded-xl p-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
              {t("Send us a message")}
            </h3>

            <form className="flex flex-col gap-4" onSubmit={handleSend}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("Your Name")}
                required
                className="p-3 rounded-md bg-black/20 text-white outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("Your Email")}
                required
                className="p-3 rounded-md bg-black/20 text-white outline-none"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("Your Phone")}
                required
                className="p-3 rounded-md bg-black/20 text-white outline-none"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("Subject")}
                className="p-3 rounded-md bg-black/20 text-white outline-none"
              />

              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("Message")}
                className="p-3 rounded-md bg-black/20 text-white outline-none resize-none"
              />

              <button
                type="submit"
                className="mt-2 py-3 bg-brand-light rounded-md hover:bg-brand-steel transition"
              >
                {t("Send Message")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
