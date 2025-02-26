import styles from './auth.module.css'
import { Link } from "react-router";
import AmazonLogo from '../../assets/images/amazonBlackLogo.png'

const Auth = () => {
  return (
    <section className={styles.login}>
      <Link>
        <img src={AmazonLogo} alt="AmazonLogo" width={100} />
      </Link>
      <div className={styles.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label><br />
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label><br />
            <input type="password" id="password" />
          </div>
          <button className={styles.SignIn_btn}>Sign In</button>
        </form>
        <p>
          By signing-ing you agree to the AMAZON CLONE (which is not real; created for educational purpose only) conditions of Use & Sale. Please see the functionality and rate the project.
        </p>
        <button>Create your Amazon Account</button>
      </div>
    </section>
  );
};

export default Auth;
