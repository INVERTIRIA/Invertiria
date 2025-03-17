import { Routes, Route } from "react-router";
import { App } from './App.jsx'

// Rutas de la aplicacion
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    )
}

export { AppRoutes }