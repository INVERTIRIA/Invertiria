import { Link } from "react-router";
import { useTranslation } from 'react-i18next';

// Componentes
import { buttonVariants } from "@/components/ui/button"

// Header
function Header() {

    const { i18n } = useTranslation();

    return (
        <div className="bg-orange-500 flex justify-end p-2">
            <Link className={buttonVariants({ variant: "ghost_secondary" })} onClick={() => changeLanguage(i18n, 'es')}>Español</Link>
            <Link className={buttonVariants({ variant: "ghost_secondary" })} onClick={() => changeLanguage(i18n, 'en')}>English</Link>
        </div>
    )
}

export { Header }

// FUNCIONES

// Cambiar idioma
function changeLanguage(i18n, language) {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
}