import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { auth } from '../../dao/server';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

    const navigate = useNavigate();

    async function handleRegister(e) {
      e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password)
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
      <form onSubmit={handleRegister}>
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
              Cadastre
              <span></span>
          </button>
        </center>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Register;