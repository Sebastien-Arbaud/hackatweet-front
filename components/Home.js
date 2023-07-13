import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/user';

const dispatch = useDispatch();
const user = useSelector((state) => state.user.value);

function Home() {

	const handleLogout = () => {
		dispatch(logout());
	};

  

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}

export default Home;
