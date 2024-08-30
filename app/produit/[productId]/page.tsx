import Container from "@/app/components/Container";
import ProductDetails from "../ProductDetails";
import { products } from "@/utils/products";

interface idParams{
        productId:string

}

const Product = ({params}: {params: idParams})=>{
 const product = products.find(((product)=> product.id === params.productId));
    return (    
      <div>
        <Container>
            <ProductDetails product={product}/>
        </Container>
      </div>
                                            
    );
}

export default Product;