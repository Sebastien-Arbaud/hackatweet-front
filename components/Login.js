import styles from '../styles/Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login } from '../reducers/user';
import { Button, Modal } from 'antd';


function Login() {

  const dispatch = useDispatch();
const user = useSelector((state) => state.user.value);

const [isModalOpenSignUp, setIsModalOpenSignUp] = useState(false);
const [isModalOpenSignIn, setIsModalOpenSignIn] = useState(false);
const [signUpFirstname, setSignUpFirstname] = useState('') 
const [signUpUsername, setSignUpUsername] = useState('');
const [signUpPassword, setSignUpPassword] = useState('');
const [signInUsername, setSignInUsername] = useState('');
const [signInPassword, setSignInPassword] = useState('');

const showModalSignUp = () => {
  setIsModalOpenSignUp(true);
};

const handleSignUp = () => {
  setIsModalOpenSignUp(false);
};

const handleCancelSignUp = () => {
  setIsModalOpenSignUp(false);
};


const showModalSignIn = () => {
  setIsModalOpenSignIn(true);
};



const handleSignIn = () => {
  setIsModalOpenSignIn(false);
};

const handleCancelSignIn = () => {
  setIsModalOpenSignIn(false);
};



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
                <button className={styles.signUp} onClick={()=> showModalSignUp()}>Sign up</button>
                <Modal className={styles.modalButton} title="Create your Hackatweet account" open={isModalOpenSignUp} onOk={handleSignUp} onCancel={handleCancelSignUp} okText="Sign up" cancelButtonProps={{style : {display: 'none'}}}>
                <input type="text" placeholder='Firstname'></input>
                <input type="text" placeholder='Lastname'></input>
                <input type="text" placeholder='Password'></input>
    </Modal>
                <h5 className={styles.loginh5}>Already have an account?</h5>
                <button className={styles.signIn} onClick={()=> showModalSignIn()}>Sign in</button>
                <Modal className={styles.modalButton} title="Connect to Hackatweet" open={isModalOpenSignIn} onOk={handleSignIn} onCancel={handleCancelSignIn} okText="Sign in" cancelButtonProps={{style : {display: 'none'}}}>
                <input type="text" placeholder='Lastname'></input>
                <input type="text" placeholder='Password'></input>
    </Modal>
            </div>
        </div>
       </main>
    </div>
  );
}

export default Login;
