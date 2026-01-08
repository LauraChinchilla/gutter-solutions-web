import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traducciones
const resources = {
  en: {
    translation: {
      Home: "Home",
      "About Us": "About Us",
      Services: "Services",
      Company: "Company",
      "Contact Us": "Contact",

      // Traducción para Home
      "Welcome to M Gutter Solutions": "Welcome to M Gutter Solutions",
      "Expert care for your home starts here. Specializing in Gutters and Much More":
        "Expert care for your home starts here. Specializing in Gutters and much more",
      "Our Services": "Our Services",

    },
  },
  es: {
    translation: {
      Home: "Inicio",
      "About Us": "Sobre Nosotros",
      "ABOUT US": "SOBRE NOSOTROS",
      Services: "Servicios",
      Company: "Empresa",
      "Contact Us": "Contacto",

      // Traducción para Home
      "Welcome to M Gutter Solutions": "Bienvenido a M Gutter Solutions",
      "Expert care for your home starts here. Specializing in Gutters and Much More":
      "El cuidado experto para tu hogar empieza aquí. Especializados en canaletas y mucho más",
      "Our Services": "Nuestros Servicios",


      "Vision": "Visión",
      "Mission": "Misión",
      "Get to know us": "Conócenos"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // idioma por defecto
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
