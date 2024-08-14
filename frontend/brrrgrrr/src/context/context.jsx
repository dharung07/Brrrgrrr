import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const GlobalContext = createContext(null);

function GlobalState({ children }) {

    const [ingredients, setIngredients] = useState([]);
    const [loadIngredients, setLoadIngredients] = useState(false);

    const [checkoutItems, setCheckoutItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const [resetCount, setResetCount] = useState(false);

    const [orders, setOrders] = useState([]);

    async function fetchIngredients() {
        try {
            const response = await fetch('https://brrrgrrr-backend.onrender.com');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            setIngredients(data?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoadIngredients(false);
        }
    }

    useEffect(() => {
        setLoadIngredients(true);
        fetchIngredients();
    }, [])

    useEffect(() => {
        ingredients.map(item => {
            const addItemToCheckout = {
                id: item._id,
                name: item.name,
                price: item.price,
                quantity: 0,
            }
            setCheckoutItems(prevItems => [...prevItems, addItemToCheckout]);
        })
    }, [ingredients]);

    function handleQuantity(id, isIncrement) {
        let updatedCheckoutItems;

        if (isIncrement) {
            updatedCheckoutItems = checkoutItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            updatedCheckoutItems = checkoutItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
        }

        setCheckoutItems(updatedCheckoutItems);

        const totPrice = updatedCheckoutItems.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0);

        setTotalPrice(totPrice);
    }


    function resetCheckOutIngredients() {
        setCheckoutItems(prevItems =>
            prevItems.map(item => ({
                ...item,
                quantity: 0
            }))
        );
    }

    function addItemToOrders(orderedItems, currentTotPrice) {
        const newOrder = {
            orderPrice: currentTotPrice,
            orderItems: orderedItems.filter(item => item.quantity > 0)
        }

        setOrders(prevOrders => [...prevOrders, newOrder]);
    }

    return (
        <GlobalContext.Provider value={{
            ingredients,
            loadIngredients,
            checkoutItems,
            totalPrice,
            setTotalPrice,
            handleQuantity,
            resetCheckOutIngredients,
            resetCount,
            setResetCount,
            addItemToOrders,
            orders,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;
