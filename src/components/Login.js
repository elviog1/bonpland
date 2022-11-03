import React from 'react'
import '../styles/Login.css'
import swAlert from 'sweetalert';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate()
    const login = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if(email == "bonpland@gmail.com" && password == "test"){
            swAlert("Bienvenido", "Conexion exitosa", "success")
            navigate("/welcome")
        }else{
            swAlert("Error", "Usuario o contraseña incorrecta", "error")
        }
    }
  return (
    <div className='d-flex justify-content-center mt-5 login'>
        <form className='form-login p-5' onSubmit={login}>
            <h2 className='login-title'>Iniciar sesion</h2>
            <div className='d-flex flex-column'>
                <label className='d-flex justify-content-start'>Correo</label>
                <input className='login-input' type="email" name='email'/>
            </div>
            <div className='d-flex flex-column'>
                <label className='d-flex justify-content-start'>Contraseña</label>
                <input className='login-input' type="password" name='password' />
            </div>
            <div className='mt-3 d-flex justify-content-center'>
                <button className='btn-iniciar'>Iniciar</button>
            </div>
            <div className='login-o'>
                <div className='login-border'></div>
                <span className='login-span'>Ó</span>
                <div className='login-border'></div>
            </div>

        </form>
    </div>
  )
}
