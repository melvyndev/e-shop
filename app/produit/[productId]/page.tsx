interface idParams{
        productId:string

}

const Product = ({params}: {params: idParams})=>{

    return (    
        <div> 
            <h1>Product {params.productId}</h1>
        </div> 
    );
}

export default Product;