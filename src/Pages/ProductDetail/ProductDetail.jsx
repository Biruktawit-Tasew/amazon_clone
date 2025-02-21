import { useParams } from "react-router";
import Layout from "../../components/Layout/layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <ProductCard product={product} />
    </Layout>
  );
};

export default ProductDetail;
