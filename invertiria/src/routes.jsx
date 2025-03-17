import { Routes, Route } from "react-router";
import { App } from './App.jsx'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

// Rutas de la aplicacion
function AppRoutes() {

    const { i18n } = useTranslation();
    
    // Obtener idioma
    useEffect(() => {
        changeLanguage(i18n, localStorage.getItem('language') || 'es');
    }, [])

    // Retornar rutas
    return (
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    )
}

export { AppRoutes }

// FUNCIONES

// Cambiar idioma
function changeLanguage(i18n, language) {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
}