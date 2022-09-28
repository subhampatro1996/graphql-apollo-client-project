import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../gqloperations/mutations";

const Signup = () => {
  const [formData, setFormData] = useState(
    {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone:"",
        subscribed:false,
        role:"USER"
    }
  );
  const [userRegister, { data, loading, error }] = useMutation(SIGNUP_USER,{
    variables : {
        firstName : formData.firstName,
        lastName : formData.lastName,
        email : formData.email,
        phone : formData.phone,
        password : formData.password,
        subscribed : formData.subscribed,
        role : formData.role
    }
  });
  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    console.log(error.message);
  }
  if (data) {
    console.log(data);
  }
  
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      subscribed : false,
      role : "USER"
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    userRegister(formData)
  };

  return (
    <div className="container my-container">
    {
        error && 
        <div className="red card-panel">
            {error.message}
        </div>
    }
    {
        data && data.userRegister && 
        <div className="green card-panel">
            {data.userRegister.username} is signed up. You can login now!
        </div>
    }
      <h5>Signup!!</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Firstname"
          name="firstname"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Lastname"
          name="lastname"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="phone"
          name="phone"
          onChange={handleChange}
          required
        />
       
        <Link to="/login">
          <p>Already have an account ? </p>
        </Link>
        <button className="btn #673ab7 deep-purple" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
