import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  StarIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  CheckCircleIcon,
  ClockIcon,
  BriefcaseIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const Company = () => {
  const { t } = useTranslation();

  return (
    <section id="company" className="relative w-full min-h-screen sm:h-screen bg-cover bg-center bg-no-repeat text-brand-white overflow-hidden">
      {/* Imagen DESKTOP */}
      <div
        className="hidden sm:block absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/Gemini_Generated_Image_4b5llp4b5llp4b5l.png')",
        }}
      />

      {/* Imagen MOBILE */}
      <div
        className="block sm:hidden absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/CompanyPhone2.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-16 sm:gap-0 sm:h-full sm:justify-between py-24 sm:py-28">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-4 text-brand-ligth mt-10">
            {t("Our Company")}
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-brand-ligth">
            {t(
              "Built on experience, craftsmanship, and a commitment to protecting what matters most — your home."
            )}
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              {t("Who we are")}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-brand-gray">
              {t(
                "M Gutter Solutions was founded with the goal of delivering reliable, long-lasting gutter systems. Our team combines technical expertise with a strong focus on customer satisfaction."
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-brand-light/20 rounded-xl p-6 sm:p-8 shadow-lg"
          >
            <h4 className="text-xl font-semibold mb-5 text-center">
              {t("Our approach")}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Precision installation",
                "Premium materials",
                "Honest communication",
                "Attention to detail",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-brand-dark/30 rounded-lg px-4 py-3 text-sm text-brand-white"
                >
                  {t(item)}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* VALUES CAROUSEL */}
        <div className="relative w-full overflow-hidden mt-6 sm:mt-0">
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            }}
          >
            {[
              { title: "Quality", text: "We never compromise on materials or craftsmanship.", icon: StarIcon },
              { title: "Trust", text: "We build long-term relationships with our clients.", icon: ShieldCheckIcon },
              { title: "Safety", text: "Your home and our team are always protected.", icon: LockClosedIcon },
              { title: "Commitment", text: "Every project matters, no matter the size.", icon: CheckCircleIcon },
              { title: "Reliability", text: "Always on time, always consistent.", icon: ClockIcon },
              { title: "Experience", text: "Years of hands-on industry expertise.", icon: BriefcaseIcon },
              { title: "Customer Care", text: "We treat every home like our own.", icon: HeartIcon },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="
                    min-w-[170px] sm:min-w-[260px]
                    bg-brand-light/25 rounded-xl
                    p-4 sm:p-6
                    text-center shadow-md
                    flex flex-col items-center
                  "
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-primary" />
                  <h4 className="text-base sm:text-xl font-semibold mt-2 sm:mt-3 mb-1 sm:mb-2">
                    {t(item.title)}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-gray">
                    {t(item.text)}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Company;
