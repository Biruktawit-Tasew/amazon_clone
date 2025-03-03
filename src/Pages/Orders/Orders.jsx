import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../components/DataProvider/DataProvider";
import styles from "./orders.module.css";
import { db } from "../../Utility/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import ProductCard from "../../components/Product/ProductCard";

const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const ordersCollectionRef = collection(db, "users", user.uid, "orders");

      const q = query(ordersCollectionRef, orderBy("created", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const ordersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setOrders(ordersData);
      });

      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.orders_container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && (
            <div
              style={{
                padding: "20px",
              }}
            >
              You don't have orders yet.
            </div>
          )}
          <div>
            {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard product={order} flex={true} key={order.id} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
