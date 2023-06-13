import { useNavigate } from 'react-router-dom';
import './index.scss';

const Signin = () => {

  const navigate = useNavigate();

  const executeSignin = () => {
    // 未実装
    alert('exec Sign in')
  }

  const goToSignup = () => {
    navigate('/Signup')
  }

  return (
    <div id='signin'>
      <input type='text' placeholder='ID' />
      <input type='password' placeholder='パスワード' />
      <button onClick={executeSignin}>Sign in</button>
      <button onClick={goToSignup}>Sign up</button>
    </div>
  )
}

export default Signin;