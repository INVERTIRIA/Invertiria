import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Componentes
import { CTASection } from "./components/CTASection";

// Pagina principal
function App() {

  const { t, i18n } = useTranslation();

  // Obtener idioma
  useEffect(() => {
    i18n.changeLanguage("es");
  }, [])

  return (
    <CTASection
      title={t("invertiria")}
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      buttonText="Get started"
      buttonText2="Learn more"
    />
  )
}

export { App }
