import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API;
const ADMIN = import.meta.env.VITE_ADMIN;

export function Dashboard() {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 20;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(
                    `${API}?page=${currentPage}&pageSize=${pageSize}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setOrders(data);
                } else {
                    throw new Error("Error fetching orders");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();

        const intervalId = setInterval(fetchOrders, 5000);

        return () => clearInterval(intervalId);
    }, [currentPage, pageSize]);

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const deliveredCheck = async (orderId, checked) => {
        try {
            const response = await fetch(`${API}/${orderId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ delivered: checked }),
            });

            if (response.ok) {
                const fetchOrders = async () => {
                    try {
                        const response = await fetch(
                            `${API}?page=${currentPage}&pageSize=${pageSize}`
                        );
                        if (response.ok) {
                            const data = await response.json();
                            setOrders(data);
                        } else {
                            throw new Error("Error fetching orders");
                        }
                    } catch (error) {
                        console.error(error);
                    }
                };
                fetchOrders();
            } else {
                throw new Error("Error al actualizar la orden");
            }
        } catch (error) {
            console.error("Error al actualizar la orden:", error);
        }
    };

    if (!orders || !orders.orders) {
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
                            <a className="nav-link active" aria-current="page">
                                Ordenes
                            </a>
                        </li>
                        <li className="nav-item w-25">
                            <Link className="nav-link" to={`/${ADMIN}/tasas`}>
                                Tasas
                            </Link>
                        </li>
                    </ul>
                    <div className="w-100 d-flex justify-content-center py-5 min-vh-100">
                        <p className="text-warning">Cargando...</p>
                        <div
                            className="spinner-border text-warning"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
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
                        <a className="nav-link active" aria-current="page">
                            Ordenes
                        </a>
                    </li>
                    <li className="nav-item w-25">
                        <Link className="nav-link" to={`/${ADMIN}/tasas`}>
                            Tasas
                        </Link>
                    </li>
                </ul>
                <div>
                    <ul className="pagination justify-content-center">
                        <li
                            className={`page-item ${
                                currentPage === 1 ? "disabled" : ""
                            }`}
                        >
                            <button
                                className="page-link"
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                            >
                                Anterior
                            </button>
                        </li>
                        {orders &&
                            orders.orders &&
                            Array.from(
                                { length: orders.totalPages },
                                (_, index) => (
                                    <li
                                        key={index}
                                        className={`page-item ${
                                            currentPage === index + 1
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() =>
                                                handlePageChange(index + 1)
                                            }
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                )
                            )}
                        <li
                            className={`page-item ${
                                currentPage === orders.totalPages
                                    ? "disabled"
                                    : ""
                            }`}
                        >
                            <button
                                className="page-link"
                                onClick={handleNextPage}
                                disabled={currentPage === orders.totalPages}
                            >
                                Siguiente
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="w-100 bg-gray py-3 px-0 rounded-3 shadow">
                    <div className="w-100 text-center">
                        <div className="row mb-3 pb-3 border-bottom border-warning align-items-center mx-3">
                            <div className="col text-warning">
                                Transaction ID
                            </div>
                            <div className="col text-warning">URL de pago</div>
                            <div className="col text-warning">
                                Fecha de creación
                            </div>
                            <div className="col text-warning">
                                Fecha de actualización
                            </div>
                            <div className="col-4 text-warning">Detalles</div>
                            <div className="col text-warning">Email</div>
                            <div className="col text-warning">Precio</div>
                            <div className="col text-warning">Pagado</div>
                            <div className="col text-warning">Prueba</div>
                        </div>
                        <form
                            action="https://www.victorygold.net/updateOrder"
                            method="post"
                        >
                            <ul className="col py-3 align-items-center">
                                {orders.orders.map((order, index) => (
                                    <li
                                        key={order.id}
                                        className={`row text-truncate text-white py-3 align-items-center w-100 ${
                                            index % 2 === 0 ? "bg-gray" : "blur"
                                        }`}
                                    >
                                        <div className="col text-truncate text-white">
                                            {order.transaction_id}
                                        </div>
                                        <div className="col text-truncate text-white">
                                            {order.url_id}
                                        </div>
                                        <div className="col text-truncate text-white">
                                            {order.created_at}
                                        </div>
                                        <div className="col text-truncate text-white">
                                            {order.updated_at}
                                        </div>
                                        <div className="col-4 text-truncate text-white">
                                            {order.details ? (
                                                order.details
                                                    .split("-")
                                                    .map((detail, index) => (
                                                        <span key={index}>
                                                            {detail}
                                                        </span>
                                                    ))
                                            ) : (
                                                <span>Sin detalles</span>
                                            )}
                                        </div>
                                        <div className="col text-truncate text-white">
                                            {order.email}
                                        </div>
                                        <div className="col text-truncate text-white">
                                            {order.amount}
                                        </div>
                                        <div className="col text-truncate text-white form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                name="delivered"
                                                id={`order${order.id}`}
                                                checked={order.delivered}
                                                onChange={(e) =>
                                                    deliveredCheck(
                                                        order.id,
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="col text-truncate text-white">
                                            <input
                                                type="text"
                                                name="proof"
                                                className="form-control py-2 bg-input text-white border-0 rounded-2 shadow"
                                                placeholder="URL a imagen"
                                                defaultValue={order.proof}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </form>
                        <div aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li
                                    className={`page-item ${
                                        currentPage === 1 ? "disabled" : ""
                                    }`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={handlePreviousPage}
                                        disabled={currentPage === 1}
                                    >
                                        Anterior
                                    </button>
                                </li>
                                {orders &&
                                    orders.orders &&
                                    Array.from(
                                        { length: orders.totalPages },
                                        (_, index) => (
                                            <li
                                                key={index}
                                                className={`page-item ${
                                                    currentPage === index + 1
                                                        ? "active"
                                                        : ""
                                                }`}
                                            >
                                                <button
                                                    className="page-link"
                                                    onClick={() =>
                                                        handlePageChange(
                                                            index + 1
                                                        )
                                                    }
                                                >
                                                    {index + 1}
                                                </button>
                                            </li>
                                        )
                                    )}
                                <li
                                    className={`page-item ${
                                        currentPage === orders.totalPages
                                            ? "disabled"
                                            : ""
                                    }`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={handleNextPage}
                                        disabled={
                                            currentPage === orders.totalPages
                                        }
                                    >
                                        Siguiente
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
