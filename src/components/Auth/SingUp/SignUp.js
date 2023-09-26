import React, { useEffect, useState } from "react";
import { Auth } from "../../../api/auth";
import {
  Autocomplete,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./SignUp.scss";

export const SignUp = () => {
  const auth = new Auth();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //   useEffect se ejecuta 1 sola vez cuando se cargue el componente
  useEffect(() => {
    console.log("signup");
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSetFirstname = (event) => {
    setFirstname(event.target.value);
  };

  const handleSetLastname = (event) => {
    setLastname(event.target.value);
  };

  const handleSave = async () => {
    const data = {
      firstname: firstname,
      lastname: lastname,
      email,
      currentPassword,
    };
    console.log(data);
    try {
      const response = await auth.signUp(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const documentTypeOptions = [
    { value: "CC", label: "Cédula de ciudadanía" },
    { value: "CE", label: "Cédula extranjera" },
    { value: "TI", label: "Tarjeta de identidad" },
    { value: "Pasaporte", label: "Pasaporte" },
  ];

  return (
    <>
      <div>
        <h2>SignUp</h2>
        <div className="auth-container">
          <form>
            <div className="auth-form">
              <div className="auth-form__row">
                <TextField
                  className="input-auth-form"
                  id="firstname"
                  value={firstname}
                  label="Firstname"
                  variant="standard"
                  onChange={handleSetFirstname}
                />
                <TextField
                  className="input-auth-form"
                  id="lastname"
                  value={lastname}
                  label="Lastname"
                  variant="standard"
                  onChange={handleSetLastname}
                />
              </div>
              <div className="auth-form__row">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={documentTypeOptions}
                  sx={{ width: 300 }}
                  // open={false}
                  renderInput={(params) => (
                    <TextField {...params} label="DocumentType" />
                  )}
                />
              </div>
              <div className="auth-form__row">
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </div>
            </div>
          </form>
          <button onClick={handleSave}>Enviar</button>
        </div>
      </div>
    </>
  );
};
