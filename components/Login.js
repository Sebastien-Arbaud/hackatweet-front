import styles from '../styles/Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login } from '../reducers/user';
import { Modal } from 'antd';
import Link from 'next/link';


function Login() {

  const dispatch = useDispatch();


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



const handleCancelSignUp = () => {
  setIsModalOpenSignUp(false);
};


const showModalSignIn = () => {
  setIsModalOpenSignIn(true);
};



const handleSignIn = () => {

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
      setIsModalOpenSignIn(false);
   
    });
};


const handleCancelSignIn = () => {
  setIsModalOpenSignIn(false);
};

const handleSignUp = () => {
  fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ firstname: signUpFirstname, username: signUpUsername, token: data.token }));
					setSignUpUsername('');
					setSignUpPassword('');
          
					
				}
        setIsModalOpenSignIn(false);
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
                <Modal  className={styles.modalButton} title="Create your Hackatweet account" open={isModalOpenSignUp} onOk={handleSignUp} onCancel={handleCancelSignUp} okText="Sign up" cancelButtonProps={{style : {display: 'none'}}}>
                <input onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} type="text" placeholder='Firstname'/>
                <input onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} type="text" placeholder='Username'/>
                <input  onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} type="text" placeholder='Password'/>
    </Modal>
                <h5 className={styles.loginh5}>Already have an account?</h5>
                <button className={styles.signIn} onClick={()=> showModalSignIn()}>Sign in</button>
                <Modal  className={styles.modalButton} title="Connect to Hackatweet" open={isModalOpenSignIn} onOk={handleSignIn} onCancel={handleCancelSignIn} okText="Sign in" cancelButtonProps={{style : {display: 'none'}}}>
                  <Link href = "/home">OK</Link>
                <input onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} type="text" placeholder='Username' />
                <input onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} type="text" placeholder='Password'/>
    </Modal>
            </div>
        </div>
       </main>
    </div>
  );
  }

export default Login;
