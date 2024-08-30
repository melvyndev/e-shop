import Container from "@/app/components/Container";
import ProductDetails from "../ProductDetails";
import { product } from "@/utils/product";

interface idParams{
        productId:string

}

const Product = ({params}: {params: idParams})=>{

    return (    
      <div>
        <Container>
            <ProductDetails product={product}/>
        </Container>
      </div>
                                            
    );
}

export default Product;