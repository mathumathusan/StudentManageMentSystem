
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function FormRegister() {
    const [click, isClick] = useState(true);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const[confirmpassword,setConfirmPassword]=useState('');
    const [validationError, setValidationError] = useState('');

    const navigate = useNavigate()
  
    const toggle = () => {
      isClick(!click);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();


      if (password !== confirmpassword) {
        setValidationError("Passwords do not match");
        return;
    }
  
   
      try {
        const res = await axios.post("http://localhost:5036/api/User/create",{name,password})
        console.log(name,password)
        console.log(res.data)
        if(res.status==200){
            navigate("/login")
        }
        
      } catch (error) {
        console.error(error.response.data)
        setValidationError(error.response.data);
      }
  
  
    };
  return (
    <div className='formContainer'>
    <form action='' className='form'>
      <div className='formname'>
        <label htmlFor='' className='labelname'>
          name
        </label>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='formname password'>
        <label htmlFor='' className='labelname'>
          password
        </label>
        <input type={click === true ? 'password' : 'text'} onChange={(e) => setPassword(e.target.value)} />
        <VisibilityIcon className='visible' onClick={() => toggle()} />
      </div>
      <div className='formname password'>
        <label htmlFor='' className='labelname'>
          confirm password
        </label>
        <input type={click === true ? 'password' : 'text'} onChange={(e) => setConfirmPassword(e.target.value)} />
        <VisibilityIcon className='visible' onClick={() => toggle()} />
      </div>
      {validationError && <p style={{ color: '#de3434' }}>{validationError}</p>}
      <button className='login' onClick={handleSubmit}>
       Register
      </button>
    <span className='registertext'> Already have an account  <Link to={"/login"} className='link'>Login</Link></span> 
    </form>
  </div>
  )
}

export default FormRegister