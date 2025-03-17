import { useTranslation } from 'react-i18next';

// Componentes
import { InvestForm } from "../components/InvestForm";

// Pagina principal
function Investment() {

  const { t } = useTranslation();
  
  return (
    <InvestForm
      title={t("investment.title")}
      paragraph={t("investment.paragraph")}
    />
  )
}

export { Investment }
