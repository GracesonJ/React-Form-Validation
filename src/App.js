import { useState } from 'react';
import './App.css';
import { TextField, colors } from '@mui/material';





function App() {
  const [userName, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmpassword] = useState("")

  const [validname, setValidname] = useState(true)
  const [validEmail, setvalidEmail] = useState(true)
  const [validPassword, setvalidPassword] = useState(true)
  const [validconfirmPassword, setValidconfirmPassword] = useState(true)
  const [isError, setIsError]=useState("")


  const validateUser = (e) => {
    // e.preventDefault()
    // console.log(e.target);
    const { name, value } = e.target
    console.log(value);
    // console.log(value);
    if (name === "userName") {
      if (!!value.match(/^[A-Za-z" "]+$/)) {
        setName(value)
        setValidname(true)

      } else {
        setName(value)
        setValidname(false)
      }
    } else if (name === "email") {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/;
      if (!!re.test(value) && value.endsWith("@gmail.com")) {
        setEmail(value)
        setvalidEmail(true)
      } else {
        setEmail(value)
        setvalidEmail(false)
      }

    } else if (name === "password") {
      var re = /[A-Z]/.test(value) && /[0-9]/.test(value)&& /^[@#][A-Za-z0-9]{7,13}$/.test(value);
      if (!!re) {
        setPassword(value)
        setvalidPassword(true)
      } else {
        setPassword(value)
        setvalidPassword(false)
      }
    } else if (name === "confirmPassword") {
      if (value === password) {
        setConfirmpassword(value)
        setValidconfirmPassword(true)
      } else {
        setConfirmpassword(value)
        setValidconfirmPassword(false)
      }
    }
  }

  const handleSubmit = (e) => {
    if (!userName || !email || !password || !confirmPassword || password!=confirmPassword) {
      alert('Please Fill The Form!')
      e.preventDefault();
    } else {
      alert(`Submited Successfully 
      Name : ${userName} 
      Email : ${email}`)
    }
  }

  return (
    <div className="container col-4 p-5 ">
      <h3 style={{textAline:"center", color:"#306375", fontFamily:"Times New Roman"}}>
        FORM VALIDATION</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{color:"black"}} htmlFor="username">Username</label>
          <input type='text' 
          className='form-control' 
          id='username' 
          placeholder='Username'
          value={userName || ""} 
          name='userName' 
          onChange={(e)=>validateUser(e)}          />
        </div>
        {! validname &&
          <div className="mb-3 text-danger fw-bolder">
            *Invalid Username
          </div>
        }
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          className='form-control' 
          id='email' 
          placeholder='Email ID'
          value={email || ""} 
          name='email' 
          onChange={(e)=>validateUser(e)}          />
        </div>
        {! validEmail &&
          <div className="mb-3 text-danger fw-bolder">
            *Invalid Email ID
          </div>
        }

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          className='form-control' 
          id='password' 
          placeholder='Password' 
          value={password || ""}
          name='password' 
          onChange={(e)=>validateUser(e)}          />
        </div>

        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input 
          type="password" 
          className='form-control' 
          id='cpassword' 
          placeholder='Confirm Password' 
          value={confirmPassword || ""}
          name='confirmPassword' 
          onChange={(e)=>validateUser(e)}  />
        </div>
        {!validconfirmPassword &&
          <div className="mb-3 text-danger fw-bolder">
            *Invalid Password
          </div>
        }

        <button style={{marginLeft:"130px"}} 
        type='submit' 
        className='btn btn-primary rounded'
        // disabled={validname && validEmail && validPassword && validconfirmPassword?false:true}
        >Sign Up</button>
      </form>
      <div className='d-flex justify-content-evenly mt-3'>
        <h5>Have an Account ?</h5>
        <a href="http://">login Here</a>
      </div>
    </div>
  );
}

export default App;
