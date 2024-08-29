'use client';
import { createContext, useState, useContext, useCallback, useEffect } from "react";
import { CartProductType } from "@/app/produit/ProductDetails";

type CartContextType = {
    cartTotalQty: number;
    cartProducts: CartProductType[] | null;
    handleProductToCart: (product: CartProductType) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState<number>(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

    useEffect(() => {
        const cartItems:any = localStorage.getItem("eShopCartItems");  
        const cProducts: CartProductType[] = JSON.parse(cartItems);
        setCartProducts(cProducts);  
        }, []);

    const handleProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;

            if (prev) {
                updatedCart = [...prev, product];
            } else {
                updatedCart = [product];
            }

            localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
            
            return updatedCart;
        });

        setCartTotalQty((prevQty) => prevQty + product.quantity);
    }, []);

+    useEffect(() => {
        const storedCart = localStorage.getItem("eShopCartItems");
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            setCartProducts(parsedCart);
            
            // Calculate total quantity from stored products
            const totalQty = parsedCart.reduce((acc: number, product: CartProductType) => acc + product.quantity, 0);
            setCartTotalQty(totalQty);
        }
    }, []);

    const value = {
        cartTotalQty,
        cartProducts,
        handleProductToCart,  // Include the function in context value
    };

    return <CartContext.Provider value={value} {...props} />;
}

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider");
    }

    return context;
}
