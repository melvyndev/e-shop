"use client";
import Image from "next/image";
import {CartProductType, SelectedImgType} from "@/app/produit/ProductDetails";

interface ProductImageProps {
    cartProduct: CartProductType;
    handlColorSelect: (value: SelectedImgType) => void;
    product:any;
}

const ProductImage: React.FC<ProductImageProps> = ({ cartProduct, handlColorSelect,product }) => {

    return (
        <div className="grid grid-cols-1 gap-2 h-full max-h-[400px] min-h-[400px] sm:min-h-[400px]">
            <div className="flex flex-col items-center gap-4 cursor-pointer border h-full max-h-[400px] min-h-[400px] sm:min-h-[400px] place-content-center">
                {product.images.map((image:SelectedImgType)=>{
                    return (<div key={image.color} onClick={()=>handlColorSelect(image)}
                     className="h-7 w-7 rounded-full border border-gray-300 cursor-pointer ${image.color === cartProduct.selectedImg?.color ? 'border-[1.5px] border-black' : 'border-none'}">

                        <Image  src={image.image}  width={100}   height={100}  alt={image.color} />
                    </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ProductImage;