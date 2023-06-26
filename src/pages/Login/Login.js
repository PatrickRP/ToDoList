import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { auth } from '../../dao/server';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Sucesso ao fazer login
          const user = userCredential.user;
          console.log(user);
          setError('');
          // Redirecionar para a página após o login bem-sucedido
          navigate("/app", { replace: true });
        })
        .catch((error) => {
          // Erro ao fazer login
          setError(error.message);
          console.log(error);
        });
    };

  return (
    <div class="login-box">
      <form onSubmit={handleLogin}>
        <div class="user-box">
          <input type="text" name="" onChange={(e) => setEmail(e.target.value)} />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input type="password" name="" onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
        </div>
        <center>
          <button type='submit'>
              Login
              <span></span>
          </button>
        </center>
        {error && <p>{error}</p>}
      </form>
      <Link className="button-link" to="/register">
        Não possui uma conta? Cadastre-se
      </Link>
    </div>
  );
}

export default Login;