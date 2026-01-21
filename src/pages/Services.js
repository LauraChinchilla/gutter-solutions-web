import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: t("Gutter Installation"),
      description: t("Professional installation of seamless gutter systems in 5\" and 6\" sizes, custom-fitted to provide superior drainage and long-lasting protection for your home."),
      image: "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/GutterServices.png",
    },
    {
      title: t("Gutter Repair"),
      description: t("Fixing leaks, misalignment, and damaged gutter sections."),
      image: "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/GutterServicesRepair.png",
    },
    {
      title: t("Gutter Cleaning"),
      description: t("Seasonal cleaning to prevent clogs and water damage."),
      image: "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/GutterCleaning.png",
    },
    {
      title: t("Gutter Covers & Guards"),
      description: t("Protect your system with high-quality guards including Bulldog, Screens, Leaf Sentry, and Master Pro. Designed to keep leaves out and reduce maintenance."),
      image: "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/Covers.png"
    },
    {
      title: t("Window & Door Repair"),
      description: t("Expert repair and restoration services for windows and doors, including professional trim installation to enhance curb appeal and ensure energy efficiency."),
      image: "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/Windows.png",
    },
    {
      title: t("Siding Installation & Repair"),
      description: t("High-quality siding solutions including Vinyl, Hardie Board, and Wood. We provide expert installation and repairs to improve insulation and give your home a fresh, modern look."),
      image: "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/Sidding.png", 
    },
    {
      title: t("Fascia & Soffit Services"),
      description: t("Expert installation and repair of metal fascia and wood soffits. We ensure a perfect seal to protect your roof rafters from rot while enhancing your home's exterior ventilation and style."),
      image: "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/fascia-and-soffit-min.png", 
    },
    {
      title: t("Rotten Wood Repair"),
      description: t("Specialized restoration of damaged wood in frames, trim, and structural areas. We identify the source of moisture, replace decayed sections, and apply professional finishes to prevent future rot."),
      image: "https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/Wood.png",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full min-h-screen bg-brand-dark text-brand-white py-28 px-6"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-bold mb-4">
          {t("Our Services")}
        </h2>
        <p className="text-lg text-brand-gray max-w-3xl mx-auto">
          {t(
            "High-quality gutter solutions designed to protect, enhance, and add value to your home."
          )}
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            onClick={() => setActiveService(i)}
            whileHover={{ scale: 1.05 }}
            animate={{ scale: activeService === i ? 1.08 : 1 }}
            transition={{ type: "spring", stiffness: 220 }}
            className={`cursor-pointer rounded-xl overflow-hidden shadow-lg bg-brand-light/10
              ${service.main ? "ring-2 ring-brand-primary" : ""}
              ${activeService === i ? "ring-2 ring-brand-steel" : ""}
            `}
          >
            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;

