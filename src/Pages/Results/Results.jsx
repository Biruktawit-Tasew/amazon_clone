import axios from "axios";
import Layout from "../../components/Layout/layout";
import { useParams } from "react-router";
import { productUrl } from "../../Api/endPoints";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Product/ProductCard";
import styles from './results.module.css'
import Loader from "../../components/Loader/Loader";

const Results = () => {
  const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  const { categoryName } = useParams();
  useEffect(() => {
            setIsLoading(true);

    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
                          setIsLoading(false);

      })
      .catch((err) => {console.log(err)
                          setIsLoading(false);

      });
  }, []);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />
          <div className={styles.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAdd={true}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Results;
