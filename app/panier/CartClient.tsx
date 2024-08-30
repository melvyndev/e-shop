"use client"

import SetQuantity from "../components/product/SetQuantity";
import { useCart } from "../hooks/useCart";
import { CartProductType } from "../produit/ProductDetails";

const CartClient = () => {

    const {cartProducts} = useCart()

    if(!cartProducts || cartProducts.length === 0) return <div><span>Panier vide</span></div>
    return (
        <div>
          <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-2xl font-bold my-4">Panier</h1>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
      Passer à la caisse
    </button>
    </div>
    <div className="mt-8">
        {cartProducts.map((product:CartProductType)=>{
            return <>
             
             <ItemContent item={product} />
            </>
             
            
        })}
       
       
    </div>
    <div className="flex justify-end items-center mt-8">
        <span className="text-gray-600 mr-4">Sous-total :</span>
        <span className="text-xl font-bold">{cartProducts.reduce((acc:number, item:CartProductType) => acc + item.price * item.quantity, 0)} €</span>
    </div>
</div>
        </div>
    );
}   

export default CartClient