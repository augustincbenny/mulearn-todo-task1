import React from 'react';
import "./Signin.css";

const Siginin:React.FC= () =>{
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }

  return (
    <div className='newbody'>
      <div className="wrapper">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Create password" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm password" required />
          </div>
          <div className="policy">
            <input type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>
          <div className="input-box button">
            <input type="Submit" value="Register Now" />
          </div>
          <div className="text">
            <h3>Already have an account? <a href="#">Login now</a></h3>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Siginin;
