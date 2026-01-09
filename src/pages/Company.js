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
    <section
      id="company"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat text-brand-white overflow-hidden"
      style={{
        backgroundImage: `url('https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/Gemini_Generated_Image_4b5llp4b5llp4b5l.png')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-between py-28">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-4 text-brand-ligth mt-10">
            {t("Our Company")}
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-brand-ligth">
            {t("Built on experience, craftsmanship, and a commitment to protecting what matters most — your home.")}
          </p>
        </motion.div>

        {/* MIDDLE CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Who we are */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-semibold mb-4">
              {t("Who we are")}
            </h3>
            <p className="text-base leading-relaxed text-brand-gray">
              {t("M Gutter Solutions was founded with the goal of delivering reliable, long-lasting gutter systems. Our team combines technical expertise with a strong focus on customer satisfaction.")}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-brand-light/20 rounded-xl p-8 shadow-lg"
            >
                <h4 className="text-xl font-semibold mb-5 text-center mx-auto">
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

        {/* VALUES - AUTO CAROUSEL */}
        <div className="relative w-full overflow-hidden">
            <motion.div
                className="flex gap-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
                }}
            >
                {[
                { title: "Quality", text: "We never compromise on materials or craftsmanship.", icon: <StarIcon className="w-8 h-8 text-brand-primary" /> },
                { title: "Trust", text: "We build long-term relationships with our clients.", icon: <ShieldCheckIcon className="w-8 h-8 text-brand-primary" /> },
                { title: "Safety", text: "Your home and our team are always protected.", icon: <LockClosedIcon className="w-8 h-8 text-brand-primary" /> },
                { title: "Commitment", text: "Every project matters, no matter the size.", icon: <CheckCircleIcon className="w-8 h-8 text-brand-primary" /> },
                { title: "Reliability", text: "Always on time, always consistent.", icon: <ClockIcon className="w-8 h-8 text-brand-primary" /> },
                { title: "Experience", text: "Years of hands-on industry expertise.", icon: <BriefcaseIcon className="w-8 h-8 text-brand-primary" /> },
                { title: "Customer Care", text: "We treat every home like our own.", icon: <HeartIcon className="w-8 h-8 text-brand-primary" /> },

                // DUPLICADOS PARA LOOP
                { title: "Quality", text: "We never compromise on materials or craftsmanship.", icon: <StarIcon className="w-8 h-8 text-brand-primary" /> },
                { title: "Trust", text: "We build long-term relationships with our clients.", icon: <ShieldCheckIcon className="w-8 h-8 text-brand-primary" /> },
                { title: "Safety", text: "Your home and our team are always protected.", icon: <LockClosedIcon className="w-8 h-8 text-brand-primary" /> },
                { title: "Commitment", text: "Every project matters, no matter the size.", icon: <CheckCircleIcon className="w-8 h-8 text-brand-primary" /> },
                { title: "Reliability", text: "Always on time, always consistent.", icon: <ClockIcon className="w-8 h-8 text-brand-primary" /> },
                { title: "Experience", text: "Years of hands-on industry expertise.", icon: <BriefcaseIcon className="w-8 h-8 text-brand-primary" /> },
                { title: "Customer Care", text: "We treat every home like our own.", icon: <HeartIcon className="w-8 h-8 text-brand-primary" /> },
                ].map((item, index) => (
                <div
                    key={index}
                    className="min-w-[260px] bg-brand-light/25 rounded-xl p-6 text-center shadow-md flex flex-col items-center"
                >
                    {/* ICONO */}
                    {item.icon}

                    {/* TITULO */}
                    <h4 className="text-xl font-semibold mb-2 mt-3">{t(item.title)}</h4>

                    {/* TEXTO */}
                    <p className="text-sm text-brand-gray">{t(item.text)}</p>
                </div>
                ))}
            </motion.div>
        </div>



      </div>
      
    </section>
  );
};

export default Company;
