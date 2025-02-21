import { useEffect, useState } from 'react'
import styles from './product.module.css'
import axios from 'axios'
import ProductCard from './ProductCard'

const Product = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res)=>{
          setProducts(res.data)
        })
      }, []);
  return (
    <section className={styles.product_container}>
      {products?.map((singleProduct) => (
        <ProductCard key={singleProduct.id} product={singleProduct} />
      ))}
    </section>
  );
}

export default Product