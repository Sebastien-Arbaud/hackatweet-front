import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';
import styles from '../styles/Home.module.css';

function Home() {

  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

const [signUpFirstname, setSignUpFirstname] = useState('') 
 const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

  const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname : signUpFirstname, username: signUpUsername, password: signUpPassword}),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ firstname: signUpFirstname, username: signUpUsername, token: data.token}));
          setSignUpFirstname('');
					setSignUpUsername('');
					setSignUpPassword('');
					
				}
			});
	};

	const handleConnection = () => {
		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword}),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({username: signInUsername, token: data.token}));
					setSignInUsername('');
					setSignInPassword('');
					
				}
			});
	};

  const handleLogout = () => {
		dispatch(logout());
		dispatch(removeAll());
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
