'use client';
import { createContext, useState, useContext, useCallback, useEffect } from "react";
import { CartProductType } from "@/app/produit/ProductDetails";
import { toast } from 'react-hot-toast';

type CartContextType = {
    cartTotalQty: number;
    cartProducts: CartProductType[] | null;
    handleProductToCart: (product: CartProductType) => void;
    handleRemoveProduct: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState<number>(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

    useEffect(() => {
        const cartItems: any = localStorage.getItem("eShopCartItems");
        if (cartItems) {
            const cProducts: CartProductType[] = JSON.parse(cartItems);
            setCartProducts(cProducts);
        }
    }, []);

    const handleProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;

            if (!prev) {
                updatedCart = [product];
            } else {
                const existingProductIndex = prev.findIndex(item => item.id === product.id);

                if (existingProductIndex !== -1) {
                    updatedCart = prev.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + product.quantity }
                            : item
                    );
                } else {
                    updatedCart = [...prev, product];
                }
            }

            localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
            toast.success('Produit ajouté avec succès!');
            return updatedCart;
        });

        setCartTotalQty((prevQty) => prevQty + product.quantity);
    }, []);

    const handleRemoveProduct = useCallback((product: CartProductType) => {
        if (cartProducts) {
            const filtredCart = cartProducts.filter((item) => item.id !== product.id);  // Fix typo here
            setCartProducts(filtredCart);
            toast.success('Produit retiré avec succès!');
            localStorage.setItem("eShopCartItems", JSON.stringify(filtredCart));
        }
    }, [cartProducts]);

    useEffect(() => {
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
        handleProductToCart,
        handleRemoveProduct,  // Include the remove product function in context
    };

    return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider");
    }

    return context;
};
