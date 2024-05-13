import { useState } from "react";
import { orders } from "../api/orders";

export function useOrders({ search }) {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getOrders = async () => {
        try {
            setLoading(true);
            setError(null);
            const newOrders = await orders({ search });
            setOrders(newOrders);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    return { orders, getOrders, loading };
}
