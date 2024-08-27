'use client';

import { CartProductType } from "@/app/produit/ProductDetails";

interface SetQty {
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
}

const SetQuantity: React.FC<SetQty> = ({
    cartCounter = false,
    cartProduct,
    handleQtyIncrease,
    handleQtyDecrease
}) => {
    return (
        <div className="flex gap-8 items-center">
            {!cartCounter && <div className="font-semibold text-gray-900">Quantité</div>}
            <div className="flex sm:items-center sm:justify-center w-full">
                <button
                    onClick={handleQtyDecrease}
                    aria-label="Decrease quantity"
                    className="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
                >
                    <svg
                        className="stroke-gray-900 group-hover:stroke-black"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.5 11H5.5"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
              <div className="w-[30px] text-center bg-gray-200 h-[56px] flex items-center justify-center">{cartProduct.quantity}</div>
                
                <button
                    onClick={handleQtyIncrease}
                    aria-label="Increase quantity"
                    className="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
                >
                    <svg
                        className="stroke-gray-900 group-hover:stroke-black"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SetQuantity;
