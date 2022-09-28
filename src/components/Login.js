import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../gqloperations/mutations';


const Login = () => {
    const [formData,setFormData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const [loggedInUser,{error,loading,data}] = useMutation(LOGIN_USER,{
        variables : {
            
            email : formData.email,
            password : formData.password,
            
        }
    })

    if (loading) {
        return <h1>loading</h1>;
      }
      if (error) {
        console.log(error.message);
      }
      if (data) {
        localStorage.setItem("token",data.login.token)
        navigate('/')
      }

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        loggedInUser(formData)
    }
  return (
    <div className='container my-container'>
    {
        error && 
        <div className="red card-panel">
            {error.message}
        </div>
    }
        <h5>Login!!</h5>

        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                placeholder='email'
                name="email"
                onChange={handleChange}
                required
            />
            <input 
                type="password"
                placeholder='password'
                name='password'
                onChange={handleChange}
                required
            />
            <Link to="/signup"><p>Dont have an account  ? </p></Link>
            <button className="btn #673ab7 deep-purple" type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login
