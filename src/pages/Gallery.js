import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const images = [
  "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/work1.jpg",
  "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/work2.jpg",
  "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/work3.jpg",
  "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/work4.jpg",
  "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/work5.jpg",
  "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/work6.jpg",
  "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/work6.jpg",
  "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/work6.jpg",
  "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/work6.jpg",
  "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/work6.jpg",
];

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="relative w-full bg-brand-gray py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-brand-dark text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t("Our Work Gallery")}
        </motion.h2>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img
                src={img}
                alt={`Project ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
              {/* Overlay al pasar el mouse */}
              <div className="absolute inset-0 bg-brand-dark/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold">
                {t("View Project")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
