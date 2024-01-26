import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function FormInput() {
  const [click, isClick] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");



  const navigate = useNavigate()


  const toggle = () => {
    isClick(!click);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !password.trim()) {
      setValidationError("Please enter name and password");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5036/api/User/login", {
        name,
        password,
      });
      // console.log(res.status);
      if(res.status==200){
         navigate("/")
      }
    } catch (error) {
      console.error(error);
      setValidationError(error.response.data)
    }

  };

  return (
    <div className="formContainer">
      <form action="" className="form">
        <div className="formname">
          <label htmlFor="" className="labelname">
            name
          </label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        {validationError && (
          <p style={{ color: "#de3434" }}>{validationError}</p>
        )}
        <div className="formname password">
          <label htmlFor="" className="labelname">
            password
          </label>
          <input
            type={click === true ? "password" : "text"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <VisibilityIcon className="visible" onClick={() => toggle()} />
        </div>
        {validationError && (
          <p style={{ color: "#de3434" }}>{validationError}</p>
        )}
        <button className="login" onClick={handleSubmit}>
          login
        </button>
        <span className="registertext">
          {" "}
          not registered{" "}
          <Link to={"/register"} className="link">
            register
          </Link>{" "}
        </span>
      </form>
    </div>
  );
}

export default FormInput;
