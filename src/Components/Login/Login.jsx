import {FaUser,FaLock} from 'react-icons/fa'  
import { useState } from 'react'
import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        alert("Enviando os dados:" +  username + "-" + password)
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1> Faça seu Login</h1>
            <div className= 'input-field'>
                <input type='text'
                 placeholder='Usuário'
                 onChange={(e) => setUsername(e.target.value)}
                 />
                <FaUser className='icon' />
            </div>
            <div className= 'input-field'>
                <input type='password'
                 placeholder='Senha'
                 onChange={(e)=> setPassword(e.target.value)}
                 />
                <FaLock className='icon' />
                
            </div>
            
            <div className='recall-forget'>
                <label>
                    <input type='checkbox' />
                    Lembrar-me
                </label>
                <a href='#'>Esqueceu a senha?</a>

                </div>

            <button className='Button'>Entrar</button>
            <div className='register'>
                <p>Não possui uma conta? <a href='#'>Cadastre-se</a></p>
            </div>        
        </form>
    </div>
  )
}

export default Login