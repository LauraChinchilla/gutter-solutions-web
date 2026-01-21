import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">

      {/* Imagen para DESKTOP */}
      <div
        className="hidden sm:block absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url('https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/Home2.png')`,
        }}
      ></div>

      {/* Imagen para MÓVIL */}
      <div
        className="block sm:hidden absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url('https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/HomePhone.png')`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTENIDO ANIMADO */}
      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto"
      >
        {/* TÍTULO */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 2 }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug"
        >
          {t("Welcome to M Gutter Solutions")}
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          className="text-white text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed"
        >
          {t("Expert care for your home starts here. Specializing in Gutters and much more.")}
        </motion.p>

        {/* BOTONES */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/services"
            className="px-6 py-3 bg-brand-light text-brand-white rounded-md hover:bg-brand-steel transition"
          >
            {t("Our Services")}
          </a>

          <a
            href="/Gallery"
            className="px-6 py-3 border-2 border-brand-light text-brand-light rounded-md hover:bg-brand-light hover:text-brand-white transition"
          >
            {t("Gallery")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
