import styles from '../styles/Login.module.css';

function Login() {

  return (
    <div>
      <main className={styles.loginmain}>
        <div className={styles.boxLeft}>
            <img src='logo.png' className={styles.logo}></img> 
            <img src='background.png' className={styles.background}></img>
        </div>
        <div className={styles.boxRight}>
        <img src='logo.png' className={styles.logoSmall}></img> 

            <h1 className={styles.logintitle}>
                See what's happening
            </h1>
            <h3 className={styles.loginh3}>Join Haackatweet today</h3>
            <div className={styles.buttons}>
                <button className={styles.signUp}>Sign up</button>
                <h5 className={styles.loginh5}>Already have an account?</h5>
                <button className={styles.signIn}>Sign in</button>
            </div>
        </div>
       </main>
    </div>
  );
}

export default Login;
