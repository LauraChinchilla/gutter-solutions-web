import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-center bg-cover flex items-center"
      style={{
        backgroundImage: `url('https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/About.png')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-brand-white text-5xl font-bold text-center mb-16"
        >
          {t("ABOUT US")}
        </motion.h2>

        {/* CUADROS SUPERIORES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-light/30 rounded-xl p-8 text-white shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {t("Vision")}
            </h3>
            <p className="text-base leading-relaxed">
              {t("We are a professional gutter installation company committed to protecting your home with quality and precision.")}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-light/30 rounded-xl p-8 text-white shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {t("Mission")}
            </h3>
            <p className="text-base leading-relaxed">
              {t("Our mission is to provide reliable gutter solutions that enhance durability, safety, and the value of your home.")}
            </p>
          </motion.div>

        </div>

        {/* CUADRO INFERIOR */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-brand-light/25 rounded-xl p-10 text-white shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
            {t("Get to know us")}
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto">
            {t("With years of experience, high-quality materials, and a customer-first approach, M Gutter Solutions is your trusted partner for long-lasting gutter systems.")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
