import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../reducers/user';

// const dispatch = useDispatch();


function Home() {

// const handleLogout = () => {
//     dispatch(logout());
// };
const user = useSelector((state) => state.user.value);
  
  return (
    <div>
      <main className={styles.main}>

    <div className={styles.boxLeft}>
      <div className={styles.logoTop}><img src='logo.png'></img></div>
      <div className={styles.user}>
        <div>
          <img></img>
          <h2>{user.firstName}</h2>
          <h5>@{user.username}</h5>
        </div>
        <button className={styles.logout}></button>
      </div>
    </div>

    <div className={styles.boxCenter}>
        <div>
          <h1 className={styles.title}>Home</h1>      
          <button className={styles.tweet}></button>     
        </div>
        <div className={styles.tweets}></div>
    </div>
    
    <div className={styles.boxRight}>
      <h1 className={styles.trends}></h1>
      <div className={styles.hashtags}>

      </div>
    </div>

  </main>
</div>
  );
}

export default Home;

