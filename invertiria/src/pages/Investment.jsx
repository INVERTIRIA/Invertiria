import { useTranslation } from 'react-i18next';

// Componentes
import { InvestForm } from "../components/InvestForm";
import { InvestResult } from '../components/InvestResults';

// Pagina de inversion
function Investment() {

  const { t } = useTranslation();

  return (
    <>
      <InvestForm
        title={t("investment.title")}
        paragraph={t("investment.paragraph")}
      />
      <InvestResult 
        title={"Resultados"}
        paragraph={"Aqui estan los resultados de tu inversion"}
      />
    </>
  )
}

export { Investment }
