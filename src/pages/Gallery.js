import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Gallery = () => {
  const { t } = useTranslation();

  return (
   <section
      id="Services"
      className="relative w-full h-screen bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `url('https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/Home.png')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center"></div>

      {/* Mensaje */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {t("Under Construction")}
        </h2>
        <p className="text-lg md:text-2xl text-white/90">
          {t("This section of the website is coming soon. Stay tuned!")}
        </p>
      </motion.div>
    </section>
  );
};

export default Gallery;
