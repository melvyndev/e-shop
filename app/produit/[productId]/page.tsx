import Container from "@/app/components/Container";
import ProductDetails from "../ProductDetails";

interface idParams{
        productId:string

}

const Product = ({params}: {params: idParams})=>{

    return (    
      <div>
        <Container>
            <ProductDetails />
        </Container>
      </div>
                                            
    );
}

export default Product;