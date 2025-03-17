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
      title={t("invertiria.title")}
      paragraph={t("invertiria.paragraph")}
      buttonText={t("invertiria.getStarted")}
      buttonText2={t("invertiria.learnMore")}
    />
  )
}

export { App }
