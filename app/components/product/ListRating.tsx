"use client";

import { Rating } from "@mui/material";

interface ListRatingProps {
    product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
    console.log(product.reviews);
    return (
        <div className="grid items-center ">
            <h3 className="font-bold text-3xl font-medium pb-2 text-slate-700 dark:text-slate-300 mb-4"> Avis </h3>
            {product.reviews && product.reviews.map((review: any, index: number) => {
                return (
                    <div key={review.id || index} className="border-b-2 pb-3 mb-3">
                        <article>
                            <div className="flex items-center mb-4">
                                <img className="w-10 h-10 me-4 rounded-full" src={review.user.image} alt=""/>
                                <div className="font-medium dark:text-white">
                                    <p>{review.user.name} <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                                </div>
                            </div>
                            <Rating name="read-only" value={review.rating} readOnly />
                            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p></footer>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">{review.user.comment}</p>
                        </article>
                    </div>
                );
            })}
        </div>
    );
};

export default ListRating;
