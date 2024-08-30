"use client"

import { useCallback } from "react";
import SetQuantity from "../components/product/SetQuantity";
import { CartProductType } from "../produit/ProductDetails"
import {useCart} from "../hooks/useCart"

interface ItemContentProps {
    item:CartProductType;
}

const ItemContent:React.FC<ItemContentProps> = ({item}) => {
    const { handleRemoveProduct,handleCartQtyIncrease,handleCartQtyDecrease } = useCart();

    return (
        <div className="flex flex-col md:flex-row border-b border-gray-400 py-4 ">
        <div className="flex-shrink-0 ">
            <img src={item.selectedImg.image} alt="Image produit" className="w-32 h-32 object-cover"/>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
            <h2 className="text-lg font-bold">{item.name}</h2>
            <div className="flex items-center mt-4">
                 <SetQuantity cartCounter={false} cartProduct={item} handleQtyIncrease={()=>{handleCartQtyIncrease(item)}} handleQtyDecrease={()=>{handleCartQtyDecrease(item)}}/>
                <button onClick={()=>{handleRemoveProduct(item)}} className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2">Supprimer</button>
            </div>
                
        </div>
      
    </div>

    )
}

export default ItemContent;