'use client'

import { CartProductType, SelectedImgType } from "@/app/produit/ProductDetails"

interface SetColorProps {
    images: SelectedImgType[],
    cartProduct: CartProductType,
    handlColorSelect: (value: SelectedImgType) => void
}

const SetColor: React.FC<SetColorProps> = ({ images, cartProduct, handlColorSelect }) => {

    return (
        <div>
            <div className="flex gap-4 items-center">
                <span className="font-semibold">COLOR:</span>
                <div className="flex gap-2">
                    {
                        images.map((image) => {
                            const isSelected = cartProduct.selectedImg && cartProduct.selectedImg.color === image.color;
                            const borderClass = isSelected ? 'border-[1.5px] border-black' : 'border-none';

                            return (


                                
                                <div
                                    key={image.color}
                                    onClick={() => handlColorSelect(image)}
                                    className={`h-7 w-7 rounded-full border border-gray-300 cursor-pointer ${borderClass}`}
                                    style={{ backgroundColor: image.color }}
                                >
                                    {isSelected && <div className="w-full h-full flex items-center justify-center text-white font-bold">✓</div>}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SetColor;
