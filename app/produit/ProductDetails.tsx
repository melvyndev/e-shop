'use client';

import { Rating } from "@mui/material";
import { useCallback, useState } from "react";
import SetColor from "../components/product/SetColor";
import SetQuantity from "../components/product/SetQuantity";
import Button from "../components/product/Button";
import ProductImage from "../components/product/ProductImage";

interface ProductDetailsProps {
  product: any;
}

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

export type CartProductType = {
  id: string;
  name: string;
  price: number;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
      product?.reviews?.length || 0;

  const [cartProducts, setCartProducts] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    price: product.price,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] }, // On initialise avec la première image par défaut
    quantity: 1,
  });

  console.log(cartProducts);

  const handlColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProducts((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProducts.selectedImg]
  );

  const handleQtyIncrease= useCallback(()=>{
        setCartProducts((prev=>{
         return{...prev,quantity:prev.quantity+1}}))
  },[cartProducts.quantity]);


  const handleQtyDecrease= useCallback(()=>{
    if(cartProducts.quantity<=1){
      return;
    }
    setCartProducts((prev=>{
      return{...prev,quantity:prev.quantity-1}}))
  },[cartProducts.quantity]);


  return (
    <div>
      <section className="relative py-20">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-16 mx-auto max-md:px-2 items-center justify-center align-middle">
            <div className="col-span-2 md:col-span-2 lg:col-span-1 max-md:mb-6">
               <ProductImage cartProduct={product} product={product} handlColorSelect={handlColorSelect}/>
            </div>

           <div className="img col-span-4 md:col-span-3 lg:col-span-2 max-md:mb-6">
              <div className="img-box h-full max-lg:mx-auto">
                <img
                  src={cartProducts.selectedImg.image}
                  alt="Product Image"
                  className="max-lg:mx-auto lg:ml-auto h-full"
                />
              </div>
            </div>
            <div className="col-span-6 lg:col-span-3 data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
              <div className="data w-full max-w-xl px-4 sm:px-6 lg:px-0">
                <p className="text-lg font-medium leading-8 text-indigo-600 mb-4">
                  Téléphone&nbsp;/&nbsp;iPhone
                </p>
                <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                  {product.name}
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                    {product.price}€
                  </h6>
                  <div className="flex items-center gap-2">
                    <Rating name="read-only" value={productRating} readOnly />
                    <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                      {product.reviews.length} avis
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-base font-normal mb-5">
                  {product.description}
                </p>
                <ul className="grid gap-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="26" height="26" rx="13" fill="#4F46E5" />
                      <path
                        d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="font-normal text-base text-gray-900">
                      Branded Phone
                    </span>
                  </li>
                </ul>
                <p className="text-gray-900 text-lg leading-8 font-medium mb-4">
                  Taille
                </p>
                <div className="w-full pb-8 border-b border-gray-100 flex-wrap">
                  <div className="grid grid-cols-3 min-[400px]:grid-cols-5 gap-3 max-w-md">
                    <button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300">
                      S
                    </button>
                    <button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300">
                      M
                    </button>
                    <button className="bg-white text-center py-1.5 px-6 w-full font-semibold text-lg leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300">
                      L
                    </button>
                  </div>
                </div>
                <div className="w-full pb-8 border-b border-gray-100 flex-wrap">
                  <SetColor
                    cartProduct={cartProducts} // Passez `cartProducts` ici
                    images={product.images}
                    handlColorSelect={handlColorSelect}
                  />
                </div>
                <div className="grid grid-cols-1 w-[300px] gap-3 py-8">
                  <SetQuantity cartProduct={cartProducts} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease}/>
                  <Button label="Ajouter au panier" onClick={() => {console.log("tu")}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
