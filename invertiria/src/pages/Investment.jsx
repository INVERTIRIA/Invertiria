import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { irr } from 'financial'

// Componentes
import { InvestForm } from "../components/InvestForm";
import { InvestResult } from '../components/InvestResults';

// Pagina de inversion
function Investment() {

  const { t } = useTranslation();

  const [results, setResults] = useState([]);

  // Flujo de caja
  const cashFlows = [-1000, 300, 400, 500, 200];

  useEffect(() => {
    getResults(cashFlows, setResults);
  }, []);

  return (
    <>
      <InvestForm
        title={t("investment.title")}
        paragraph={t("investment.paragraph")}
      />
      <InvestResult
        title={"Resultados"}
        paragraph={"Aqui estan los resultados de tu inversion:"}
        results={
          <>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-cyan-50">Cash Flows: {cashFlows.toString()}</p>
            <p className="mx-auto mt-2 max-w-xl text-lg/8 text-pretty text-cyan-50">TIR: {results[0]}</p>
          </>
        }
      />
    </>
  )
}

export { Investment }

// FUNCIONES
function getResults(cashFlows, setResults) {

  // Calcular la TIR
  const tir = irr(cashFlows);
  setResults([`${(tir * 100).toFixed(2)}%`])
}

