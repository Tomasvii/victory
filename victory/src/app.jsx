import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./components/normalize.css";
import "./components/bootstrap.css";
import "./components/styles.css";
import { Nav } from "./components/Nav.jsx";
import { Footer } from "./components/Footer.jsx";
import { MainContent } from "./components/MainContent.jsx";

export function App() {
    return (
        <BrowserRouter>
            <header className="blur d-flex position-sticky top-0 z-3">
                <Nav />
            </header>
            <MainContent />
            <Footer />
        </BrowserRouter>
    );
}
