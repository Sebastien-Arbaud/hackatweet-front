import styles from '../styles/Modalbuttons.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login } from '../reducers/user';
import { Button, Modal } from 'antd';
const [signUpFirstname, setSignUpFirstname] = useState('') 
const [signUpUsername, setSignUpUsername] = useState('');
const [signUpPassword, setSignUpPassword] = useState('');


function SignUp() {

        
    const handleSignUp = () => {
    setIsModalOpenSignUp(true);    
    };
   
    const handleCancelSignUp = () => {
    setIsModalOpenSignUp(true);    
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

    Return (

    <div>
        <Modal className={styles.modalStyle} title="Create your Hackatweet account" onOk={handleRegister} onCancel={handleCancelSignUp} okText="Sign up" cancelButtonProps={{style : {display: 'none'}}}>
                  <input className={styles.fields} onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} type="text" placeholder='Firstname'></input>
                  <input className={styles.fields} onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} type="text" placeholder='Lastname'></input>
                  <input  className={styles.fields} onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} type="text" placeholder='Password'></input>
        </Modal>
    </div>

    );
}

export default SignUp;