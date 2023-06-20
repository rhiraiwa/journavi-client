import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const Signin = () => {

  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleUserId = (event) => {
    setUserId(event.target.value);
  }
  
  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const executeSignin = () => {
    // 未実装
    if (!(userId === 'admin' && password === 'admin')) return;

    sessionStorage.setItem('userId', userId);
    navigate('/Schedule');
  }

  const goToSignup = () => {
    navigate('/Signup')
  }

  return (
    <div id='signin'>
      <input type='text'
             value={userId}
             onChange={handleUserId}
             placeholder='UserID' />
      <input type='password'
             value={password}
             onChange={handlePassword}
             placeholder='パスワード' />
      <button onClick={executeSignin}>Sign in</button>
      <button id='sign-up-button' onClick={goToSignup}>Sign up</button>
    </div>
  )
}

export default Signin;