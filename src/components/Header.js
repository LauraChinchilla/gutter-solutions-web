import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { name: "Home", href: "" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Services", href: "/Services" },
    { name: "Company", href: "/Company" },
    { name: "Contact Us", href: "/Contact" },
  ];

  const changeLanguaje = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-brand-dark shadow-md">
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img
              src="https://chocoxfsidqqlpdazxva.supabase.co/storage/v1/object/public/logoGutter/logoHeader.png"
              alt="Logo"
              className="h-16 md:h-24 w-auto"
            />
          </a>

          {/* LINKS + BANDERA DERECHA */}
          <div className="flex items-center space-x-4">
            {/* MENU DESKTOP */}
            <nav className="hidden md:flex items-center space-x-8 font-medium">
              {links.map(link => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    "relative flex flex-col items-center group text-brand-white"
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{t(link.name)}</span>
                      <span
                        className={`block w-full h-0.5 bg-brand-white rounded mt-1 transition-transform duration-300 origin-left ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
            {/* BANDERA DE IDIOMA */}
            <button onClick={changeLanguaje} className="flex-shrink-0">
              <img
                src={
                  i18n.language === "en"
                    ? "https://flagcdn.com/es.svg"
                    : "https://flagcdn.com/us.svg"
                }
                alt="Language"
                className="h-4 w-6 sm:h-6 sm:w-9 object-cover rounded hover:opacity-80 transition-opacity"
              />
            </button>
            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-brand-gray text-3xl hover:text-brand-light transition-colors focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>

          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden absolute top-20 right-6 w-48 bg-brand-dark text-white rounded-lg shadow-lg py-4 px-4 space-y-3 z-50">
          {links.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className="block hover:text-brand-light transition-colors"
              onClick={() => setOpen(false)}
            >
              {t(link.name)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
