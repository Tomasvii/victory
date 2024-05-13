import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard.jsx";
import { Tasas } from "./Tasas.jsx";
import { Page404 } from "./Page404.jsx";

const ADMIN = import.meta.env.VITE_ADMIN;

export function MainContent() {
    return (
        <Routes>
            <Route path={`/${ADMIN}`} element={<Dashboard />} />
            <Route path={`/${ADMIN}/tasas`} element={<Tasas />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
