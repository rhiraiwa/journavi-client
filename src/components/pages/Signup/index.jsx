import { useNavigate } from 'react-router-dom';
import './index.scss';

const Signup = () => {
  const navigate = useNavigate();

  const executeSignup = () => {
    // 未実装
    alert('exec Sign up');
  };

  const backToSignin = () => {
    navigate('/');
  };

  return (
    <div id='signup'>
      <input type='text' placeholder='ID' />
      <input type='password' placeholder='パスワード' />
      <input type='password' placeholder='パスワード（確認用）' />
      <button onClick={executeSignup}>Create Account</button>
      <button className='cancel' onClick={backToSignin}>Cancel</button>
    </div>
  );
};

export default Signup;
