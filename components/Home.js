import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/user';




function Home() {

  const dispatch = useDispatch();
const user = useSelector((state) => state.user.value);

	const handleLogout = () => {
		dispatch(logout());
	};

  

  return (
    <div>
      <main className={styles.main}>
        <h6 className={styles.title}>
          <p>Welcome to home</p>
        </h6>
      </main>
    </div>
  );
}

export default Home;
