import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrashCan} from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

// import { logout } from '../reducers/user';

// const dispatch = useDispatch();


function Home() {

// const handleLogout = () => {
//     dispatch(logout());
// };
const user = useSelector((state) => state.user.value);


  
  const [count, setCount] = useState (0);
  
  return (
    <div>
      <main className={styles.main}>

    <div className={styles.boxLeft}>
      <img className={styles.logoTop} src='logo.png'></img>
      <div className={styles.user}>
        <div className={styles.bottombox}>
          <div className={styles.userbox}>
          <img className={styles.blueDot} src='egg1.png'></img>
          <div className={styles.users}>
          <h2 className={styles.firstName}>SebPhil</h2>
          <h5 className={styles.userName}>@SebPhil</h5>
          </div>
          </div>
          <button className={styles.logout}>Logout</button>
        </div>
      </div>
    </div>

    <div className={styles.boxCenter}>
        <div>
          <h1 className={styles.title}>Home</h1>      
          <div className={styles.inputborder}>
            <input onChange={(e) => setCount(e.target.value.length )} className={styles.inputbar} placeholder='Whats up?'></input>
          </div>
          <div className={styles.tweetBar}>
            <div className={styles.counter}>{count}/280</div><button className={styles.tweet}>Tweet</button>   
          </div>
        </div>
          {/* <FontAwesomeIcon icon={faTrashCan} />   */}
        <div className={styles.tweets}>

        </div>
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

