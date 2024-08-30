"use client"

import SetQuantity from "../components/product/SetQuantity";
import { useCart } from "../hooks/useCart";
import { CartProductType } from "../produit/ProductDetails";
import ItemContent from "./ItemContnent";

const CartClient = () => {

    const {cartProducts,handleCartClear,cartTotalQty} = useCart()

    if(!cartProducts || cartProducts.length === 0) return <div className="flex justify-center items-center"><span className="text-2xl font-bold">Panier vide</span></div>
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
    <div className="flex justify-between items-center mt-8">
        <div>
            <span onClick={()=>handleCartClear()} className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2">Vider le panier</span>
        </div>
        <div>
            <span className="text-gray-600 mr-4">Sous-total :</span>
            <span className="text-xl font-bold">
                {cartProducts
                    .reduce((acc: number, item: CartProductType) => acc + item.price * item.quantity, 0)
                    .toFixed(2)} € 
            </span> 
        </div>
          </div>
</div>
        </div>
    );
}   

export default CartClient