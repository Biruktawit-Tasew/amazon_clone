import axios from "axios";
import Layout from "../../components/Layout/layout";
import { useParams } from "react-router";
import { productUrl } from "../../Api/endPoints";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Product/ProductCard";
import styles from './results.module.css'

const Results = () => {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <div>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={styles.products_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Results;
