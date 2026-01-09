import { useTranslation } from "react-i18next";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CameraIcon, ShareIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";


const ContactUs = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSend = (e) => {
    e.preventDefault();

    emailjs.send(
        "service_kqt40jo",
        "template_g6150cq",
        formData,
        "ByXNbTz6ZpCN0_R-G"
    ).then(
        (result) => {
            toast.success("¡Tus datos han sido recibidos! Nos pondremos en contacto contigo lo antes posible.");
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        },
        (error) => {
            toast.error("¡Oops! Algo salió mal, por favor intenta nuevamente.");
            console.error(error.text);
        }
    );
    };


  const contacts = [
    {
      title: t("Phone"),
      value: "+1 (913) 944-1486",
      icon: <PhoneIcon className="w-8 h-8 text-brand-white" />,
      link: "tel:+19139441486",
    },
    {
      title: t("Email"),
      value: "guttersolutions115@gmail.com",
      icon: <EnvelopeIcon className="w-8 h-8 text-brand-white" />,
      link: "mailto:guttersolutions115@gmail.com",
    },
    {
      title: t("Address"),
      value: "123 Main Street, Anytown, USA",
      icon: <MapPinIcon className="w-8 h-8 text-brand-white" />,
      link: "https://www.google.com/maps",
    },
    {
      title: t("WhatsApp"),
      value: "+1 (913) 944-1486",
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-brand-white" />,
      link: "https://wa.me/19139441486",
    },
    {
      title: "Instagram",
      value: "@mguttersolutions",
      icon: <CameraIcon className="w-8 h-8 text-brand-white" />,
      link: "https://instagram.com/mguttersolutions",
    },
    {
      title: "Facebook",
      value: "/mguttersolutions",
      icon: <ShareIcon className="w-8 h-8 text-brand-white" />,
      link: "https://facebook.com/mguttersolutions",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat text-brand-white overflow-hidden"
      style={{
        backgroundImage: `url('https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/ContactUs.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* CONTACT CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6"
          >
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveIndex(i)}
                whileHover={{ scale: 1.05 }}
                animate={{ scale: activeIndex === i ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`bg-brand-light/20 rounded-xl p-4 flex flex-col items-center justify-center gap-2 shadow-md hover:bg-brand-light/40 transition-colors`}
              >
                {c.icon}
                <h4 className="text-sm font-semibold text-center">{c.title}</h4>
                <p className="text-xs text-brand-gray text-center">{c.value}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-brand-light/20 rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-semibold mb-6 text-center">
              {t("Send us a message")}
            </h3>

            <form className="flex flex-col gap-4" onSubmit={handleSend}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("Your Name")}
                className="p-3 rounded-md bg-black/20 text-white placeholder:text-brand-gray outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("Your Email")}
                className="p-3 rounded-md bg-black/20 text-white placeholder:text-brand-gray outline-none"
                required
              />
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("Your Phone")}
                className="p-3 rounded-md bg-black/20 text-white placeholder:text-brand-gray outline-none"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("Subject")}
                className="p-3 rounded-md bg-black/20 text-white placeholder:text-brand-gray outline-none"
              />
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("Message")}
                className="p-3 rounded-md bg-black/20 text-white placeholder:text-brand-gray outline-none resize-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-light text-brand-white rounded-md hover:bg-brand-steel transition mt-2 transition-colors text-center"
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
