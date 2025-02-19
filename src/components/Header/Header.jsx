import styles from './header.module.css'
import AmazonLogo from '../../assets/images/amazonLogo.png'
import USA_Flag from '../../assets/images/Flag_of_the_United_States.png'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';

const Header = () => {
  return (
    <div>
      <div className={styles.header_container}>
        <div className={styles.logo_container}>
          <a href="/">
            <img src={AmazonLogo} alt="Amazon Logo" />
          </a>
          <div className={styles.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={styles.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <BsSearch size={25} />
        </div>
        <div className={styles.order_container}>
          <a href="" className={styles.language}>
            <img src={USA_Flag} alt="USA_Flag" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>

          <a href="">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>
          <a href="">
            <p>returns</p>
            <span>& Orders</span>
          </a>
          <a href="/cart" className={styles.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </div>
      <LowerHeader />
    </div>
  );
}

export default Header