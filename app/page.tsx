import { products } from "@/utils/products";
import Container from "./components/Container";
import HomeBanner from "./components/nav/HomeBanner";
import Card from "./components/Card";



export default function Home() {
  return (
    <div>
      <Container>
        <HomeBanner />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product: any) => {
            return (
           <Card key={product.id} data={product} />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
