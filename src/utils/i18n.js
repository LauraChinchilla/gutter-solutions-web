import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traducciones
const resources = {
  en: {
    translation: {
      // Menú
      Home: "Home",
      "About Us": "About Us",
      "ABOUT US": "ABOUT US",
      Services: "Services",
      Company: "Company",
      "Contact Us": "Contact Us",

      // Home
      "Welcome to M Gutter Solutions": "Welcome to M Gutter Solutions",
      "Expert care for your home starts here. Specializing in Gutters and much more.":
        "Expert care for your home starts here. Specializing in Gutters and much more.",
      "Our Services": "Our Services",

      // About Us
      Vision: "Vision",
      Mission: "Mission",
      "Get to know us": "Get to know us",
      "We are a professional gutter installation company committed to protecting your home with quality and precision.":
        "We are a professional gutter installation company committed to protecting your home with quality and precision.",
      "Our mission is to provide reliable gutter solutions that enhance durability, safety, and the value of your home.":
        "Our mission is to provide reliable gutter solutions that enhance durability, safety, and the value of your home.",
      "With years of experience, high-quality materials, and a customer-first approach, M Gutter Solutions is your trusted partner for long-lasting gutter systems.":
        "With years of experience, high-quality materials, and a customer-first approach, M Gutter Solutions is your trusted partner for long-lasting gutter systems.",

      "Get a Quote": "Get a Quote",
      "Gallery": "Gallery",

      // Company
      "Our Company": "Our Company",
      "Built on experience, craftsmanship, and a commitment to protecting what matters most — your home.":
        "Built on experience, craftsmanship, and a commitment to protecting what matters most — your home.",
      "Who we are": "Who we are",
      "M Gutter Solutions was founded with the goal of delivering reliable, long-lasting gutter systems. Our team combines technical expertise with a strong focus on customer satisfaction.":
        "M Gutter Solutions was founded with the goal of delivering reliable, long-lasting gutter systems. Our team combines technical expertise with a strong focus on customer satisfaction.",
      "Our approach": "Our approach",
      "Precision installation": "Precision installation",
      "Premium materials": "Premium materials",
      "Honest communication": "Honest communication",
      "Attention to detail": "Attention to detail",
      Quality: "Quality",
      "We never compromise on materials or craftsmanship.": "We never compromise on materials or craftsmanship.",
      Trust: "Trust",
      "We build long-term relationships with our clients.": "We build long-term relationships with our clients.",
      Safety: "Safety",
      "Your home and our team are always protected.": "Your home and our team are always protected.",
      Commitment: "Commitment",
      "Every project matters, no matter the size.": "Every project matters, no matter the size.",
      Reliability: "Reliability",
      "Always on time, always consistent.": "Always on time, always consistent.",
      Experience: "Experience",
      "Years of hands-on industry expertise.": "Years of hands-on industry expertise.",
      "Customer Care": "Customer Care",
      "We treat every home like our own.": "We treat every home like our own.",

      // Contact Us
      "Send us a message": "Send us a message",
      "Your Name": "Your Name",
      "Your Email": "Your Email",
      "Your Phone": "Your Phone",
      Subject: "Subject",
      Message: "Message",
      "Send Message": "Send Message",
      Phone: "Phone",
      Email: "Email",
      Address: "Address",
      WhatsApp: "WhatsApp",
      Instagram: "Instagram",
      Facebook: "Facebook",
      "Your data has been received! We will contact you as soon as possible.":
        "Your data has been received! We will contact you as soon as possible.",
      "Oops! Something went wrong, please try again.":
        "Oops! Something went wrong, please try again.",
      
      // EN
      "Under Construction": "Under Construction",
      "This section of the website is coming soon. Stay tuned!": "This section of the website is coming soon. Stay tuned!",
            "Gutter Installation": "Gutter Installation",
      "Gutter Repair": "Gutter Repair",
      "Gutter Cleaning": "Gutter Cleaning",
      "Downspout Installation": "Downspout Installation",
      "Roof & Fascia Inspection": "Roof & Fascia Inspection",
      "Leaf Guard Systems": "Leaf Guard Systems",

      "Professional installation of seamless gutter systems designed to protect your home.":
        "Professional installation of seamless gutter systems designed to protect your home.",
      "Fixing leaks, misalignment, and damaged gutter sections.":
        "Fixing leaks, misalignment, and damaged gutter sections.",
      "Seasonal cleaning to prevent clogs and water damage.":
        "Seasonal cleaning to prevent clogs and water damage.",
      "Efficient water drainage solutions to protect foundations.":
        "Efficient water drainage solutions to protect foundations.",
      "Preventive inspections to ensure long-term durability.":
        "Preventive inspections to ensure long-term durability.",
      "Advanced systems to keep leaves and debris out.":
        "Advanced systems to keep leaves and debris out.",
      "High-quality gutter solutions designed to protect, enhance, and add value to your home.":
      "High-quality gutter solutions designed to protect, enhance, and add value to your home.",

"Professional installation of seamless gutter systems in 5\" and 6\" sizes, custom-fitted to provide superior drainage and long-lasting protection for your home.":
  "Professional installation of seamless gutter systems in 5\" and 6\" sizes, custom-fitted to provide superior drainage and long-lasting protection for your home.",


"Gutter Covers & Guards": "Gutter Covers & Guards",
"Protect your system with high-quality guards including Bulldog, Screens, Leaf Sentry, and Master Pro. Designed to keep leaves out and reduce maintenance.":
  "Protect your system with high-quality guards including Bulldog, Screens, Leaf Sentry, and Master Pro. Designed to keep leaves out and reduce maintenance.",

"Window & Door Repair": "Window & Door Repair",
"Expert repair and restoration services for windows and doors, including professional trim installation to enhance curb appeal and ensure energy efficiency.":
  "Expert repair and restoration services for windows and doors, including professional trim installation to enhance curb appeal and ensure energy efficiency.",

"Siding Installation & Repair": "Siding Installation & Repair",
"High-quality siding solutions including Vinyl, Hardie Board, and Wood. We provide expert installation and repairs to improve insulation and give your home a fresh, modern look.":
  "High-quality siding solutions including Vinyl, Hardie Board, and Wood. We provide expert installation and repairs to improve insulation and give your home a fresh, modern look.",

"Fascia & Soffit Services": "Fascia & Soffit Services",
"Expert installation and repair of metal fascia and wood soffits. We ensure a perfect seal to protect your roof rafters from rot while enhancing your home's exterior ventilation and style.":
  "Expert installation and repair of metal fascia and wood soffits. We ensure a perfect seal to protect your roof rafters from rot while enhancing your home's exterior ventilation and style.",

"Rotten Wood Repair": "Rotten Wood Repair",
"Specialized restoration of damaged wood in frames, trim, and structural areas. We identify the source of moisture, replace decayed sections, and apply professional finishes to prevent future rot.":
  "Specialized restoration of damaged wood in frames, trim, and structural areas. We identify the source of moisture, replace decayed sections, and apply professional finishes to prevent future rot."

    },
  },
  es: {
    translation: {
      // Menú
      Home: "Inicio",
      "About Us": "Sobre Nosotros",
      "ABOUT US": "SOBRE NOSOTROS",
      Services: "Servicios",
      Company: "Empresa",
      "Contact Us": "Contáctanos",

      // Home
      "Welcome to M Gutter Solutions": "Bienvenido a M Gutter Solutions",
      "Expert care for your home starts here. Specializing in Gutters and much more.":
        "El cuidado experto para tu hogar empieza aquí. Especializados en canaletas y mucho más.",
      "Our Services": "Nuestros Servicios",

      // About Us
      Vision: "Visión",
      Mission: "Misión",
      "Get to know us": "Conócenos",
      "We are a professional gutter installation company committed to protecting your home with quality and precision.":
        "Somos una empresa profesional de instalación de canaletas comprometida con la protección de tu hogar con calidad y precisión.",
      "Our mission is to provide reliable gutter solutions that enhance durability, safety, and the value of your home.":
        "Nuestra misión es brindar soluciones confiables de canaletas que aumenten la durabilidad, seguridad y el valor de tu hogar.",
      "With years of experience, high-quality materials, and a customer-first approach, M Gutter Solutions is your trusted partner for long-lasting gutter systems.":
        "Con años de experiencia, materiales de alta calidad y un enfoque centrado en el cliente, M Gutter Solutions es tu socio de confianza para sistemas de canaletas duraderos.",

      "Get a Quote": "Obtener una Cotización",
      "Gallery": "Galería",

      // Company
      "Our Company": "Nuestra Empresa",
      "Built on experience, craftsmanship, and a commitment to protecting what matters most — your home.":
        "Basado en la experiencia, la artesanía y el compromiso de proteger lo que más importa: tu hogar.",
      "Who we are": "Quiénes somos",
      "M Gutter Solutions was founded with the goal of delivering reliable, long-lasting gutter systems. Our team combines technical expertise with a strong focus on customer satisfaction.":
        "M Gutter Solutions fue fundada con el objetivo de ofrecer sistemas de canaletas confiables y duraderos. Nuestro equipo combina experiencia técnica con un fuerte enfoque en la satisfacción del cliente.",
      "Our approach": "Nuestro enfoque",
      "Precision installation": "Instalación precisa",
      "Premium materials": "Materiales de primera",
      "Honest communication": "Comunicación honesta",
      "Attention to detail": "Atención al detalle",
      Quality: "Calidad",
      "We never compromise on materials or craftsmanship.": "Nunca comprometemos la calidad de los materiales ni la mano de obra.",
      Trust: "Confianza",
      "We build long-term relationships with our clients.": "Construimos relaciones a largo plazo con nuestros clientes.",
      Safety: "Seguridad",
      "Your home and our team are always protected.": "Tu hogar y nuestro equipo siempre están protegidos.",
      Commitment: "Compromiso",
      "Every project matters, no matter the size.": "Cada proyecto importa, sin importar su tamaño.",
      Reliability: "Fiabilidad",
      "Always on time, always consistent.": "Siempre a tiempo, siempre consistente.",
      Experience: "Experiencia",
      "Years of hands-on industry expertise.": "Años de experiencia práctica en la industria.",
      "Customer Care": "Atención al cliente",
      "We treat every home like our own.": "Tratamos cada hogar como si fuera nuestro.",

      // Contact Us
      "Send us a message": "Envíanos un mensaje",
      "Your Name": "Tu Nombre",
      "Your Email": "Tu Correo",
      "Your Phone": "Tu Teléfono",
      Subject: "Asunto",
      Message: "Mensaje",
      "Send Message": "Enviar Mensaje",
      Phone: "Teléfono",
      Email: "Correo",
      Address: "Dirección",
      WhatsApp: "WhatsApp",
      Instagram: "Instagram",
      Facebook: "Facebook",
      "Your data has been received! We will contact you as soon as possible.":
        "¡Tus datos han sido recibidos! Nos pondremos en contacto contigo lo antes posible.",
      "Oops! Something went wrong, please try again.":
        "¡Oops! Algo salió mal, por favor intenta nuevamente.",

      // ES
      "Under Construction": "En Construcción",
      "This section of the website is coming soon. Stay tuned!": "Esta sección del sitio web estará disponible pronto. ¡Mantente atento!",

       "Gutter Installation": "Instalación de Canaletas",
      "Gutter Repair": "Reparación de Canaletas",
      "Gutter Cleaning": "Limpieza de Canaletas",
      "Downspout Installation": "Instalación de Bajantes",
      "Roof & Fascia Inspection": "Inspección de Techo y Fascia",
      "Leaf Guard Systems": "Sistemas Antihojas",

      "Professional installation of seamless gutter systems designed to protect your home.":
        "Instalación profesional de sistemas de canaletas sin juntas diseñados para proteger tu hogar.",
      "Fixing leaks, misalignment, and damaged gutter sections.":
        "Reparación de fugas, desalineaciones y secciones de canaletas dañadas.",
      "Seasonal cleaning to prevent clogs and water damage.":
        "Limpieza estacional para prevenir obstrucciones y daños por agua.",
      "Efficient water drainage solutions to protect foundations.":
        "Soluciones eficientes de drenaje de agua para proteger los cimientos.",
      "Preventive inspections to ensure long-term durability.":
        "Inspecciones preventivas para garantizar la durabilidad a largo plazo.",
      "Advanced systems to keep leaves and debris out.":
        "Sistemas avanzados para mantener hojas y escombros fuera.",
        "High-quality gutter solutions designed to protect, enhance, and add value to your home.":
  "Soluciones de canaletas de alta calidad diseñadas para proteger, mejorar y añadir valor a tu hogar.",

"Gutter Covers & Guards": "Protectores y Cubiertas para Canaletas",
"Protect your system with high-quality guards including Bulldog, Screens, Leaf Sentry, and Master Pro. Designed to keep leaves out and reduce maintenance.":
  "Protege tu sistema con protectores de alta calidad como Bulldog, Screens, Leaf Sentry y Master Pro. Diseñados para evitar la acumulación de hojas y reducir el mantenimiento.",

"Window & Door Repair": "Reparación de Ventanas y Puertas",
"Expert repair and restoration services for windows and doors, including professional trim installation to enhance curb appeal and ensure energy efficiency.":
  "Servicios expertos de reparación y restauración de ventanas y puertas, incluyendo instalación profesional de molduras para mejorar la apariencia y garantizar eficiencia energética.",

"Siding Installation & Repair": "Instalación y Reparación de Revestimientos",
"High-quality siding solutions including Vinyl, Hardie Board, and Wood. We provide expert installation and repairs to improve insulation and give your home a fresh, modern look.":
  "Soluciones de revestimiento de alta calidad que incluyen Vinyl, Hardie Board y madera. Brindamos instalación y reparaciones profesionales para mejorar el aislamiento y darle a tu hogar un aspecto moderno y renovado.",

"Fascia & Soffit Services": "Servicios de Fascia y Soffit",
"Expert installation and repair of metal fascia and wood soffits. We ensure a perfect seal to protect your roof rafters from rot while enhancing your home's exterior ventilation and style.":
  "Instalación y reparación profesional de fascia metálica y soffits de madera. Garantizamos un sellado perfecto para proteger las vigas del techo contra la humedad y mejorar la ventilación y el estilo exterior de tu hogar.",

"Rotten Wood Repair": "Reparación de Madera Dañada",
"Specialized restoration of damaged wood in frames, trim, and structural areas. We identify the source of moisture, replace decayed sections, and apply professional finishes to prevent future rot.":
  "Restauración especializada de madera dañada en marcos, molduras y áreas estructurales. Identificamos la fuente de humedad, reemplazamos las secciones deterioradas y aplicamos acabados profesionales para prevenir futuros daños."

    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
