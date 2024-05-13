import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ADMIN = import.meta.env.VITE_ADMIN;
const GAMES = import.meta.env.VITE_API_GAMES;
const CURRENCIES = import.meta.env.VITE_API_CURRENCIES;
const PRODUCTS = import.meta.env.VITE_API_PRODUCTS;

export function Tasas() {
    const [games, setGames] = useState();
    const [currencies, setCurrencies] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(`${GAMES}`);
                if (response.ok) {
                    const data = await response.json();
                    setGames(data);
                } else {
                    throw new Error("Error fetching orders");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchGames();
    }, []);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await fetch(`${CURRENCIES}`);
                if (response.ok) {
                    const data = await response.json();
                    setCurrencies(data);
                } else {
                    throw new Error("Error fetching currencies");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCurrencies();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${PRODUCTS}`);
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else {
                    throw new Error("Error fetching currencies");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    if (!games) {
        return (
            <div className="w-100 d-flex justify-content-center py-5 min-vh-100">
                <p className="text-warning">Cargando...</p>
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (!currencies) {
        return (
            <div className="w-100 d-flex justify-content-center py-5 min-vh-100">
                <p className="text-warning">Cargando...</p>
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (!products) {
        return (
            <div className="w-100 d-flex justify-content-center py-5 min-vh-100">
                <p className="text-warning">Cargando...</p>
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div
            className="container justify-content-center desktop mobile"
            style={{ maxWidth: "100%" }}
        >
            <div className="row m-5 text-center col-12 p-3 rounded-3">
                <div className="col-12 d-flex justify-content-center">
                    <img
                        src="/images/icons/logo.svg"
                        alt="logo Victory Gold"
                        style={{ width: "2em", height: "2em" }}
                        className="align-self-center m-2"
                    />
                    <p className="form-text-desktop mb-0 pb-2">
                        Panel de administrador
                    </p>
                </div>
                <ul className="nav nav-tabs w-100 justify-content-center mb-3">
                    <li className="nav-item w-25">
                        <Link className="nav-link" to={`/${ADMIN}`}>
                            Ordenes
                        </Link>
                    </li>
                    <li className="nav-item w-25">
                        <Link className="nav-link active" aria-current="page">
                            Tasas
                        </Link>
                    </li>
                </ul>
                <div className="w-100 d-flex justify-content-center">
                    <div className="col p-5">
                        <div>
                            <form
                                action="https://www.victorygold.net/process-prices"
                                method="post"
                            >
                                <div className="d-flex justify-content-center">
                                    <div className="m-3 col-2">
                                        <h2 className="m-3 text-warning">
                                            CAMBIAR TASAS COMPRA
                                        </h2>
                                        <select
                                            name="game"
                                            required
                                            className="form-select shadow py-2 mb-3"
                                            defaultValue=""
                                        >
                                            <option value={""} disabled>
                                                Seleccionar Juego
                                            </option>
                                            {games.map((oneGame) => (
                                                <option
                                                    key={oneGame.juego_id}
                                                    value={oneGame.juego_id}
                                                >
                                                    {oneGame.nombre}
                                                </option>
                                            ))}
                                            <option value="all">Todos</option>
                                        </select>
                                        <textarea
                                            className="text-warning bg-dark border-0"
                                            name="rawData"
                                            rows="5"
                                            cols="20"
                                        ></textarea>
                                        <br />
                                        <button
                                            className="mt-3 btn btn-warning"
                                            type="submit"
                                        >
                                            <strong>Actualizar</strong>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <div className="col p-5">
                        <div>
                            <form
                                action="https://www.victorygold.net/process-prices-sell"
                                method="post"
                            >
                                <div className="d-flex justify-content-center">
                                    <div className="m-3 col-2">
                                        <h2 className="m-3 text-warning">
                                            CAMBIAR TASAS VENTA
                                        </h2>
                                        <select
                                            name="game"
                                            required
                                            className="form-select shadow py-2 mb-3"
                                            defaultValue=""
                                        >
                                            <option value={""} disabled>
                                                Seleccionar Juego
                                            </option>
                                            {games.map((oneGame) => (
                                                <option
                                                    key={oneGame.juego_id}
                                                    value={oneGame.juego_id}
                                                >
                                                    {oneGame.nombre}
                                                </option>
                                            ))}
                                            <option value="all">Todos</option>
                                        </select>
                                        <textarea
                                            className="text-warning bg-dark border-0"
                                            name="rawData"
                                            rows="5"
                                            cols="20"
                                        ></textarea>
                                        <br />
                                        <button
                                            className="mt-3 btn btn-warning"
                                            type="submit"
                                        >
                                            <strong>Actualizar</strong>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <div className="col p-5">
                        <div>
                            <form
                                action="https://www.victorygold.net/process-prices-currencies"
                                method="post"
                            >
                                <div className="d-flex justify-content-center">
                                    <div className="m-3 col-2">
                                        <h2 className="m-3 text-warning">
                                            CAMBIAR TASA MONEDAS COMPRA
                                        </h2>
                                        <select
                                            name="game"
                                            required
                                            className="form-select shadow py-2 mb-3"
                                            defaultValue=""
                                        >
                                            <option value={""} disabled>
                                                Seleccionar Moneda
                                            </option>
                                            {currencies.map((oneCurrency) => (
                                                <option
                                                    key={oneCurrency.id}
                                                    value={oneCurrency.moneda}
                                                >
                                                    {oneCurrency.moneda}
                                                </option>
                                            ))}
                                            <option value="all">Todos</option>
                                        </select>
                                        <textarea
                                            className="text-warning bg-dark border-0"
                                            name="rawData"
                                            rows="5"
                                            cols="20"
                                        ></textarea>
                                        <br />
                                        <button
                                            className="mt-3 btn btn-warning"
                                            type="submit"
                                        >
                                            <strong>Actualizar</strong>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <div className="col p-5">
                        <div>
                            <form
                                action="https://www.victorygold.net/process-prices-currencies-sell"
                                method="post"
                            >
                                <div className="d-flex justify-content-center">
                                    <div className="m-3 col-2">
                                        <h2 className="m-3 text-warning">
                                            CAMBIAR TASA MONEDAS VENTA
                                        </h2>
                                        <select
                                            name="game"
                                            required
                                            className="form-select shadow py-2 mb-3"
                                            defaultValue=""
                                        >
                                            <option value={""} disabled>
                                                Seleccionar Moneda
                                            </option>
                                            {currencies.map((oneCurrency) => (
                                                <option
                                                    key={oneCurrency.id}
                                                    value={oneCurrency.moneda}
                                                >
                                                    {oneCurrency.moneda}
                                                </option>
                                            ))}
                                            <option value="all">Todos</option>
                                        </select>
                                        <textarea
                                            className="text-warning bg-dark border-0"
                                            name="rawData"
                                            rows="5"
                                            cols="20"
                                        ></textarea>
                                        <br />
                                        <button
                                            className="mt-3 btn btn-warning"
                                            type="submit"
                                        >
                                            <strong>Actualizar</strong>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <div className="col p-5">
                        <div>
                            <form
                                action="https://www.victorygold.net/process-prices-store"
                                method="post"
                            >
                                <div className="d-flex justify-content-center">
                                    <div className="m-3 col-2">
                                        <h2 className="m-3 text-warning">
                                            CAMBIAR PRECIO DE PRODUCTOS
                                        </h2>
                                        <select
                                            name="game"
                                            required
                                            className="form-select shadow py-2 mb-3"
                                            defaultValue=""
                                        >
                                            <option value={""} disabled>
                                                Seleccionar Producto
                                            </option>
                                            {products.map((oneProduct) => (
                                                <option
                                                    key={oneProduct.id}
                                                    value={oneProduct.nombre}
                                                >
                                                    {oneProduct.nombre}
                                                </option>
                                            ))}
                                            <option value="all">Todos</option>
                                        </select>
                                        <textarea
                                            className="text-warning bg-dark border-0"
                                            name="rawData"
                                            rows="5"
                                            cols="20"
                                        ></textarea>
                                        <br />
                                        <button
                                            className="mt-3 btn btn-warning"
                                            type="submit"
                                        >
                                            <strong>Actualizar</strong>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
