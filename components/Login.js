import styles from '../styles/Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import styles from '../styles/Home.module.css';

const dispatch = useDispatch();
const user = useSelector((state) => state.user.value);

const [signUpFirstname, setSignUpFirstname] = useState('') 
const [signUpUsername, setSignUpUsername] = useState('');
const [signUpPassword, setSignUpPassword] = useState('');
const [signInUsername, setSignInUsername] = useState('');
const [signInPassword, setSignInPassword] = useState('');

function Login() {

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
