import Layout from "../../components/Layout/layout";
import CarouselEffect from "../../components/Carousel/CarouselEffect";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";
const Landing = () => {
  return (
    <Layout>
      <CarouselEffect />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing